(function () {
    'use strict';
    angular.module('pb.products').controller('ProductsListCtrl', ['$log', '$scope', '$filter', '$uibModal','PBServiceClient', 
     function($log, $scope, $filter, $uibModal, PBServiceClient) {
        var _this                   = this;
        
        /**
         * Product Model object.
         */
        _this.productsModel = null;
        
        /**
         * As user profiles may have very large amount of accounts(BPN) associated to them, fetching the products for all the BPNs in a 
         * single call is not possible. So the product widget is loading the products for fixed set of accounts in each iteration until the
         * products for all the accounts are loaded.
         * 
         * iterationSize - The number of BPN's that will be passed in each iteration to get the products.
         * totalIterations - Total number of iteration to do to fetch products for all profile BPN's. It depends on the iterationSize.
         * currentIteration - Tells the current iteration count.
         */
        _this.iterationSize = 10;
        
        _this.totalIterations = 1;
        
        _this.currentIteration = 1;
        
        /**
         * set sortType to date on page load
         */ 
        $scope.sortType = 'date';
        
        $scope.filters = { };
        
        _this.selectedProductTypeFilter = '';
        
        $scope.currentPage = 1;
       
        /**
         * The initialization function to be called when the products widget starts loading.
         * If the products are already there in the cache, then use it to render the products else initiate the get products call that fetches
         * the products in a iterative fashion for all the BPNs associated to the current user profile.
         * 
         * If the products are pre-fetched for some BPNs as part of DashboardInit, then don't make the call for those BPNs again to SAP but make a
         * ProductDetailOnWigetLoad only.
         */
        _this.initAllProductsPage = function() {
        	var fullProductList = PBServiceClient.getFromPBServiceCache(PBServiceClient.CacheObject.ProductJSON);
        	
        	if(fullProductList != null && fullProductList.preFetchAccNoList != null) {
        		_this.productsModel = fullProductList;
        		_this.getProductDetailsOnPageLoad(fullProductList);
        	}
        	
        	if(fullProductList == null || (fullProductList != null && fullProductList.preFetchAccNoList != null)) {
	            PBServiceClient.getUser().then(
            function(data){
		    			if(data != null) {
							if(data.LHGAttributes.accNoList != null) {
								var accNoList = data.LHGAttributes.accNoList;
            	
								/**
								 * Eliminate pre-fetched BPNs from the main list and only make the call for the remaining BPNs.
								 */
								if(fullProductList != null && fullProductList.preFetchAccNoList != null) {
									for(var i = accNoList.length - 1; i >= 0; i--) {
										for( var j = 0; j < fullProductList.preFetchAccNoList.length; j++) {
											if(accNoList[i] && accNoList[i] === fullProductList.preFetchAccNoList[j]) {
												accNoList.splice(i, 1);
											}
										}
									}
									/**
									 * Clear the pre-fetch list and store products into cache again.
									 */
									fullProductList.preFetchAccNoList = null;
									PBServiceClient.addToPBServiceCache(PBServiceClient.CacheObject.ProductJSON, fullProductList);
								}
								
								_this.totalIterations = accNoList.length / _this.iterationSize;
								if((accNoList.length % _this.iterationSize) > 0){
									_this.totalIterations++;
								}
								var accList = [];
								for(_this.currentIteration = 1; _this.currentIteration <= _this.totalIterations; _this.currentIteration++) {
									var endIndex = _this.iterationSize * _this.currentIteration;
									var startIndex = endIndex - _this.iterationSize;
									var accSubList = [];
									for(var i = startIndex; i < endIndex; i++) {
										if(i < accNoList.length) {
											accSubList.push(accNoList[i]);
										}
									}
								
									accList.push(accSubList.join());
						        }
								_this.getProducts(accList);
							}
		    			}
            },
            function(response) {
            	_this.productsModel = null;
            }).finally(function() {
		    			console.log("PageSize : "+_this.iterationSize+"  PageCount : "+_this.totalIterations+" CurrentPage : "+_this.currentIteration);
            });
        	}
        	else {
        		_this.productsModel = fullProductList;
        	}
        };
        _this.initAllProductsPage();
        
        /**
         * Make "First type of product call" which fetches the basic product details from SAP. It does not make any call to any other system
         * for performance reasons where in the basic products should be shown to customer as soon as possible.
         */
        _this.getProducts = function(accList) {
        	function iterativeProductLoad(accList, index) {
        		console.log(accList.length+" Index print1 : "+index);
        		if(accList != null && index < accList.length) {
	    	    	PBServiceClient.getPaginatedProducts(accList[index]).then(
                function(data){
		            	/**
		            	 * On success of current iteration, make further calls to other functions which depends on the output of current iteration.
		            	 */
		            	var fullProductList = PBServiceClient.getFromPBServiceCache(PBServiceClient.CacheObject.ProductJSON);
		            	if(fullProductList != null) {
		            		_this.productsModel = fullProductList;
		            	}
		            	else {
                	_this.productsModel = data;
		            	}
		            	console.log("Product Size4 :"+fullProductList.products.length);
		            	_this.getProductDetailsOnPageLoad(data);
		            	
		            	iterativeProductLoad(accList, ++index);
                },
                function(response) {
		            	/**
		            	 * Even if the current iteration fails for some reason, continue with the next iteration.
		            	 * Only don't make the calls to functions which depends on current iteration's output.  
		            	 */
		            	var fullProductList = PBServiceClient.getFromPBServiceCache(PBServiceClient.CacheObject.ProductJSON);
		            	if(fullProductList != null) {
		            		_this.productsModel = fullProductList;
		            	}

		            	console.log("Product Size1 :"+fullProductList.products.length);
		            	iterativeProductLoad(accList, ++index);
	                });
        		}
        	}

        	/**
        	 * Initiate the recursive call to fetch all the products for all the BPNs in user profile.
        	 */
        	iterativeProductLoad(accList, 0);
        };
        
        /**
         * Make "Second type of product call" which fetches additional product details on page load.
         * Its fetches details for Meter Status(DLA) and Smartlink details.
         */
        _this.getProductDetailsOnPageLoad = function(products) {
        	PBServiceClient.getProductDetailsOnWidgetLoad(products).then(
                function(data){
                	console.log("Product Size3 :"+data.products.length);
                	_this.productsModel = data;
                },
                function(response) {

                }).finally(function() {

                });            	
        };
        

        /**
         * Make "Third type of product call" to get the product detail for a given product when user expand the a given product.
         * This is called when user clicks expands/collapse icons on each product. Called only when its expanded. When collapsed don't make any call.
         */
        $scope.getProductDetailsOnExpand = function(accountNum, equipNum) {
        	var showDetails=false;
        	var inputProduct;
        	angular.forEach(_this.productsModel.products, function(product,index) {
        		if(product.accNo == accountNum && product.equipmentNumber == equipNum) {
        			inputProduct = product;
        			if(product.showDetails == false) {
        				showDetails = !product.showDetails;
        			}
        			else {
        				_this.productsModel.products[index].showDetails = !product.showDetails;
        			}
        		}
        	});
        	if(showDetails) {
            	PBServiceClient.getProductDetailsOnExpand(inputProduct).then(
                    function(data){
                     	var products = _this.productsModel.products;
                    	angular.forEach(products, function(product,index){
                    		if(product.accNo == data.accNo && product.equipmentNumber == data.equipmentNumber) {
                    			product = angular.merge(product,data);
                    			_this.productsModel.products[index] = product;
                    		}
                    	});
                    	PBServiceClient.addToPBServiceCache(PBServiceClient.CacheObject.ProductJSON,_this.productsModel);
                    },
                    function(response) {

                    }).finally(function() {
                    	angular.forEach(_this.productsModel.products, function(product,index){
                    		if(product.accNo == accountNum && product.equipmentNumber == equipNum) {
                    			_this.productsModel.products[index].showDetails = showDetails;
                    		}
                    	});
                    });
        	}
        };
        
        /**
         * Download all the products as a PDF file.
         */
        $scope.downloadProductsAsPDF = function() {
        	PBServiceClient.downloadProductsAsPDF(_this.productsModel).then(
                function(data){
                	saveAs(data.blob, data.fileName);
                },
                function(response) {

                }).finally(function() {

                });            	
        };
        
        /**
         * Download all the products as a CSV file.
         */
        $scope.downloadProductsAsCSV = function() {
        	PBServiceClient.downloadProductsAsCSV(_this.productsModel).then(
                function(data){
                	saveAs(data.blob, data.fileName);
                },
                function(response) {

                }).finally(function() {

                });
        };
        
        /**
         * Opens "Add Account" model window to add BPN to user profile.
         */
        $scope.addaccount = function(account, data){
            $uibModal.open({
                templateUrl: 'modules/pb-elements/templates/add-account-flow.jsp',
                controller: 'BootstrapUiAddAccountModalController as pbAddAccountmodal',
                keyboard: false,
                size: 'lg',
                backdrop: 'static',
                resolve : {
                    account: function() { return account; },
                    data: function () { return data;}
                }
            }).result.then(function(confirmationModel) {
                //validate the confirmationModel.question and confirmationModel.answer on server before redirecting
                
            });
        };
        
        // switches title of dropdown to selected filter in detail pages
        $scope.switchFilterText = function($event, clickedText) {
        	$($event.currentTarget).parents('.dropdown').removeClass('open').find('button').find('.text').text(clickedText);
        	$scope.currentPage = 1;
        };
        
     // Working on global fix for links in dropdowns that require ng-click and there for break the dropdown toggle on touch devices
        $scope.mobileClose = function($event) {
            $($event.currentTarget).parents('.dropdown').removeClass('open');
        };
        
        $scope.accountNumberSort = function(i) {
            var accountNo = i.accNo;
            return accountNo;
        };
        
        $scope.productNameSort = function(i) {
            var name = i.name;
            return name;
        };
        
        $scope.pcnSort = function(i) {
            var pcn = i.pcn;
            return pcn;
        };
       
        $scope.locationSort = function(i) {
            var location = i.location;
            return location;
        };

        _this.filterProductType = function( model ) {
            if ( _this.selectedProductTypeFilter === '' ) {
            	return model;
            }
            else if (model.type && model.type == _this.selectedProductTypeFilter) {
                return model;
            }
            return;
        };

    }]);
    
    
})();
