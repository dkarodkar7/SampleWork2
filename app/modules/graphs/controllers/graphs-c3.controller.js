(function() {

  'use strict';

  angular.module('pb.ds.graphs').controller('C3Controller', function($log) {

    var _this = this;

    //COLORS
    _this.colors = [
      '#0072B8',
      '#CF0989',
      '#009DBF',
      '#A03F9B',
      '#EF8200',
      '#00B140',
      '#EDB700',
      '#3E53A4'
    ];

    _this.mono = [
      '#00436E',
      '#005A93',
      '#0072B8',
      '#66AAD4',
      '#CCE3F1',
      '#E5F1F8'
    ];



    //DONUT
    _this.donutColor5 = {
      options: {
        data: [
          {
            data1: 35,
            data2: 24,
            data3: 22,
            data4: 12,
            data5: 7
          }
        ],
        dimensions: {
          data1: {
            type: 'donut',
            name: 'Category One'
          },
          data2: {
            type: 'donut',
            name: 'Category Two'
          },
          data3: {
            type: 'donut',
            name: 'Category Three'
          },
          data4: {
            type: 'donut',
            name: 'Category Four'
          },
          data5: {
            type: 'donut',
            name: 'Category Five'
          }
        },
        chart: {
          color: {
            pattern: _this.colors
          },
          donut: {
            label: {
              threshold: 0.1
            }
          }
        }
      }
    };

    _this.donutMono5 = {
      options: {
        data: [
          {
            data1: 35,
            data2: 24,
            data3: 22,
            data4: 12,
            data5: 7
          }
        ],
        dimensions: {
          data1: {
            type: 'donut',
            name: 'Category One'
          },
          data2: {
            type: 'donut',
            name: 'Category Two'
          },
          data3: {
            type: 'donut',
            name: 'Category Three'
          },
          data4: {
            type: 'donut',
            name: 'Category Four'
          },
          data5: {
            type: 'donut',
            name: 'Category Five'
          }
        },
        chart: {
          color: {
            pattern: _this.mono
          },
          donut: {
            label: {
              threshold: 0.1
            }
          }
        }
      }
    };





    //PIE
    _this.pieColor5 = {
      options: {
        data: [
          {
            data1: 35,
            data2: 24,
            data3: 22,
            data4: 12,
            data5: 7
          }
        ],
        dimensions: {
          data1: {
            type: 'pie',
            name: 'Category One'
          },
          data2: {
            type: 'pie',
            name: 'Category Two'
          },
          data3: {
            type: 'pie',
            name: 'Category Three'
          },
          data4: {
            type: 'pie',
            name: 'Category Four'
          },
          data5: {
            type: 'pie',
            name: 'Category Five'
          }
        },
        chart: {
          color: {
            pattern: _this.colors
          },
          pie: {
            label: {
              threshold: 0.1
            }
          }
        }
      }
    };


    _this.pieMono5 = {
      options: {
        data: [
          {
            data1: 35,
            data2: 24,
            data3: 22,
            data4: 12,
            data5: 7
          }
        ],
        dimensions: {
          data1: {
            type: 'pie',
            name: 'Category One'
          },
          data2: {
            type: 'pie',
            name: 'Category Two'
          },
          data3: {
            type: 'pie',
            name: 'Category Three'
          },
          data4: {
            type: 'pie',
            name: 'Category Four'
          },
          data5: {
            type: 'pie',
            name: 'Category Five'
          }
        },
        chart: {
          color: {
            pattern: _this.mono
          },
          pie: {
            label: {
              threshold: 0.1
            }
          }
        }
      }
    };





    //BAR
    _this.barColor8 = {
      options: {
        data: [
          {
            year: 2015,
            data1: 45,
            data2: 28,
            data3: 35,
            data4: 85,
            data5: 55,
            data6: 45,
            data7: 58,
            data8: 25
          }
        ],
        dimensions: {
          year: {
            axis: 'x'
          },
          data1: {
            type: 'bar',
            name: 'Category One'
          },
          data2: {
            type: 'bar',
            name: 'Category Two'
          },
          data3: {
            type: 'bar',
            name: 'Category Three'
          },
          data4: {
            type: 'bar',
            name: 'Category Four'
          },
          data5: {
            type: 'bar',
            name: 'Category Five'
          },
          data6: {
            type: 'bar',
            name: 'Category Six'
          },
          data7: {
            type: 'bar',
            name: 'Category Seven'
          },
          data8: {
            type: 'bar',
            name: 'Category Eight'
          }
        },
        chart: {
          legend: {
            hide: false
          },
          tooltip: {
            show: true
          },
          grid: {
            y: {
              show: true
            }
          },
          color: {
            pattern: _this.colors
          }
        }
      }
    };


    _this.barMono8 = {
      options: {
        data: [
          {
            year: 2015,
            data1: 45,
            data2: 28,
            data3: 35,
            data4: 85,
            data5: 55,
            data6: 45,
            data7: 58,
            data8: 25
          }
        ],
        dimensions: {
          year: {
            axis: 'x'
          },
          data1: {
            type: 'bar',
            name: 'Category One'
          },
          data2: {
            type: 'bar',
            name: 'Category Two'
          },
          data3: {
            type: 'bar',
            name: 'Category Three'
          },
          data4: {
            type: 'bar',
            name: 'Category Four'
          },
          data5: {
            type: 'bar',
            name: 'Category Five'
          },
          data6: {
            type: 'bar',
            name: 'Category Six'
          },
          data7: {
            type: 'bar',
            name: 'Category Seven'
          },
          data8: {
            type: 'bar',
            name: 'Category Eight'
          }
        },
        chart: {
          legend: {
            hide: false
          },
          tooltip: {
            show: true
          },
          grid: {
            y: {
              show: true
            }
          },
          color: {
            pattern: _this.mono
          }
        }
      }
    };


    _this.barColor5Multiple = {
      options: {
        data: [
          {
            year: 2014,
            data1: 45,
            data2: 28,
            data3: 35,
            data4: 85,
            data5: 55
          },
          {
            year: 2015,
            data1: 65,
            data2: 45,
            data3: 48,
            data4: 95,
            data5: 75
          }
        ],
        dimensions: {
          year: {
            axis: 'x'
          },
          data1: {
            type: 'bar',
            name: 'Category One'
          },
          data2: {
            type: 'bar',
            name: 'Category Two'
          },
          data3: {
            type: 'bar',
            name: 'Category Three'
          },
          data4: {
            type: 'bar',
            name: 'Category Four'
          },
          data5: {
            type: 'bar',
            name: 'Category Five'
          }
        },
        chart: {
          legend: {
            hide: false
          },
          tooltip: {
            show: true
          },
          grid: {
            y: {
              show: true
            }
          },
          color: {
            pattern: _this.colors
          }
        }
      }
    };


    _this.barMono5Multiple = {
      options: {
        data: [
          {
            year: 2014,
            data1: 45,
            data2: 28,
            data3: 35,
            data4: 85,
            data5: 55
          },
          {
            year: 2015,
            data1: 65,
            data2: 45,
            data3: 48,
            data4: 95,
            data5: 75
          }
        ],
        dimensions: {
          year: {
            axis: 'x'
          },
          data1: {
            type: 'bar',
            name: 'Category One'
          },
          data2: {
            type: 'bar',
            name: 'Category Two'
          },
          data3: {
            type: 'bar',
            name: 'Category Three'
          },
          data4: {
            type: 'bar',
            name: 'Category Four'
          },
          data5: {
            type: 'bar',
            name: 'Category Five'
          }
        },
        chart: {
          legend: {
            hide: false
          },
          tooltip: {
            show: true
          },
          grid: {
            y: {
              show: true
            }
          },
          color: {
            pattern: _this.mono
          }
        }
      }
    };





    //GAUGE
    _this.gauge = {
      options: {
        data: [
          {
            data1: 60
          }
        ],
        dimensions: {
          data1: {
            type: 'gauge',
            label: 'false'
          }
        },
        chart: {
          zoom: false,
          legend: false,
          tooltip: {
            show: false
          },
          color: {
            pattern: ['#00B140']
          },
          gauge: {
            expand: false,
            units: 'Progress',
            label: {
              format: function(value, ratio) {
                return value + ' %';
              }
            }
          }
        }
      }
    };



    //AREA
    _this.area = {
      options: {
        data: [
          {
            year: 2013,
            data1: 35,
            data2: 25
          },
          {
            year: 2014,
            data1: 60,
            data2: 50
          },
          {
            year: 2015,
            data1: 40,
            data2: 45
          },
          {
            year: 2016,
            data1: 45,
            data2: 60
          }
        ],
        dimensions: {
          year: {
            axis: 'x'
          },
          data1: {
            type: 'area-spline',
            name: 'Category One'
          },
          data2: {
            type: 'area-spline',
            name: 'Category Two'
          }
        },
        chart: {
          grid: {
            y: {
              show: true
            }
          },
          color: {
            pattern: _this.colors
          }
        }
      }
    };

  });

})();
