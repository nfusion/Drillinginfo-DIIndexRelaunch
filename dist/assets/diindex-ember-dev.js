"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('diindex-ember-dev/app', ['exports', 'ember', 'diindex-ember-dev/resolver', 'ember-load-initializers', 'diindex-ember-dev/config/environment'], function (exports, _ember, _diindexEmberDevResolver, _emberLoadInitializers, _diindexEmberDevConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _diindexEmberDevConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _diindexEmberDevConfigEnvironment['default'].podModulePrefix,
    Resolver: _diindexEmberDevResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _diindexEmberDevConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
/* jshint esversion: 6 */
define('diindex-ember-dev/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'diindex-ember-dev/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _diindexEmberDevConfigEnvironment) {

  var name = _diindexEmberDevConfigEnvironment['default'].APP.name;
  var version = _diindexEmberDevConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('diindex-ember-dev/components/gas-production-widget', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('diindex-ember-dev/components/high-charts', ['exports', 'ember-highcharts/components/high-charts'], function (exports, _emberHighchartsComponentsHighCharts) {
  exports['default'] = _emberHighchartsComponentsHighCharts['default'];
});
define('diindex-ember-dev/components/oil-production-widget', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('diindex-ember-dev/components/permit-count-chart', ['exports', 'ember-highcharts/components/high-charts', 'diindex-ember-dev/themes/drillinginfo'], function (exports, _emberHighchartsComponentsHighCharts, _diindexEmberDevThemesDrillinginfo) {
	exports['default'] = _emberHighchartsComponentsHighCharts['default'].extend({
		chartMode: '', // empty, 'StockChart', or 'Map'
		chartOptions: {
			chart: {
				type: 'line'
			},
			plotOptions: {
				line: {
					//showInLegend: false,
					pointIntervalUnit: 'month'
				}
			},
			title: {
				text: 'Permit Count (30 days)'
			},
			xAxis: {
				type: 'datetime',
				title: {
					text: 'Date'
				}
			},
			yAxis: {
				title: {
					text: 'Rig Count'
				},
				min: 440
			}
		},
		chartData: [],
		theme: _diindexEmberDevThemesDrillinginfo['default']
	});
});
define('diindex-ember-dev/components/rig-count-chart-other', ['exports', 'ember-highcharts/components/high-charts', 'diindex-ember-dev/themes/drillinginfo'], function (exports, _emberHighchartsComponentsHighCharts, _diindexEmberDevThemesDrillinginfo) {
	exports['default'] = _emberHighchartsComponentsHighCharts['default'].extend({
		chartMode: '', // empty, 'StockChart', or 'Map'
		chartOptions: {
			chart: {
				type: 'spline'
			},
			plotOptions: {
				spline: {
					showInLegend: false,
					dashStyle: 'solid',
					lineWidth: 2,
					//lineColor: '#1d54a0',
					states: {
						hover: {
							halo: false
						}
					},
					marker: {
						enabled: true,
						symbol: 'circle',
						radius: 3,
						fillColor: '#296ab1',
						lineColor: '#296ab1',
						lineWidth: 4,
						states: {
							hover: {
								enabled: true
							}
						}
					}
				}
			},
			title: {
				text: 'Rig Count Other'
			},
			xAxis: {
				type: 'datetime',
				title: {
					text: 'Date'
				}
			},
			yAxis: {
				title: {
					text: 'Rig Count'
				},
				min: 440
			}
		},
		chartData: [],
		theme: _diindexEmberDevThemesDrillinginfo['default']
	});
});
define('diindex-ember-dev/components/rig-count-chart', ['exports', 'ember-highcharts/components/high-charts', 'diindex-ember-dev/themes/drillinginfo'], function (exports, _emberHighchartsComponentsHighCharts, _diindexEmberDevThemesDrillinginfo) {
	exports['default'] = _emberHighchartsComponentsHighCharts['default'].extend({
		chartMode: '', // empty, 'StockChart', or 'Map'
		chartOptions: {
			chart: {
				type: 'area'
			},
			plotOptions: {
				area: {
					showInLegend: false,
					marker: {
						enabled: false,
						symbol: 'circle',
						radius: 3,
						states: {
							hover: {
								enabled: true
							}
						}
					}
				},
				line: {
					lineWidth: 10,
					marker: {
						lineWidth: 6,
						lineColor: '#fff',
						fillColor: '#1d54a0'
					}
				}
			},
			title: {
				text: 'Rig Count (30 Days)'
			},
			xAxis: {
				type: 'datetime',
				title: {
					text: 'Date'
				}
			},
			yAxis: {
				title: {
					text: 'Rig Count'
				},
				min: 440
			}
		},
		chartData: [],
		theme: _diindexEmberDevThemesDrillinginfo['default']
	});
});
define('diindex-ember-dev/components/top-ten', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('diindex-ember-dev/components/us-permit-count-widget', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('diindex-ember-dev/components/us-prod-by-type-chart', ['exports', 'ember-highcharts/components/high-charts', 'diindex-ember-dev/themes/drillinginfo'], function (exports, _emberHighchartsComponentsHighCharts, _diindexEmberDevThemesDrillinginfo) {
	exports['default'] = _emberHighchartsComponentsHighCharts['default'].extend({
		chartMode: '', // empty, 'StockChart', or 'Map'
		chartOptions: {
			chart: {
				backgroundColor: '#e9e7e4',
				type: 'line'
			},
			plotOptions: {
				line: {
					showInLegend: false,
					pointIntervalUnit: 'month'

				}
			},
			title: {
				text: 'U.S. Production Capacity - Oil vs. Gas',
				style: {
					"fontSize": "18px"
				}
			},
			xAxis: {
				type: 'datetime',
				title: {
					text: 'Month'
				}
			},
			yAxis: [
			// oil
			{
				title: {
					text: 'MBBL/Day'
				}
			},
			//gas
			{
				title: {
					text: 'BCF/Day'
				},
				opposite: true
			}]
		},
		chartData: [],
		theme: _diindexEmberDevThemesDrillinginfo['default']
	});
});
define('diindex-ember-dev/components/us-prod-cap-chart', ['exports', 'ember-highcharts/components/high-charts', 'diindex-ember-dev/themes/drillinginfo'], function (exports, _emberHighchartsComponentsHighCharts, _diindexEmberDevThemesDrillinginfo) {
	exports['default'] = _emberHighchartsComponentsHighCharts['default'].extend({
		chartMode: '', // empty, 'StockChart', or 'Map'
		chartOptions: {
			chart: {
				type: 'column'
			},
			plotOptions: {
				column: {
					showInLegend: false,
					pointIntervalUnit: 'month'
				}
			},
			title: {
				text: 'U.S. Production Capacity (MBOE/Day)'
			},
			xAxis: {
				type: 'datetime',
				title: {
					text: 'Month'
				}
			},
			yAxis: {
				title: {
					text: 'MBOE/Day'
				},
				min: 400
			}
		},
		chartData: [],
		theme: _diindexEmberDevThemesDrillinginfo['default']
	});
});
define('diindex-ember-dev/components/us-production-capacity-widget', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('diindex-ember-dev/components/us-rig-count-widget', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('diindex-ember-dev/helpers/delta-direction', ['exports', 'ember'], function (exports, _ember) {
	exports.deltaDirection = deltaDirection;

	function deltaDirection(params /*, hash*/) {
		var output = '';
		if (params > 0) {
			return '<span class="inc">' + params + '%</span>';
		}

		return '<span class="dec">' + params + '%</span>';
	}

	exports['default'] = _ember['default'].Helper.helper(deltaDirection);
});
define('diindex-ember-dev/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('diindex-ember-dev/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('diindex-ember-dev/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'diindex-ember-dev/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _diindexEmberDevConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_diindexEmberDevConfigEnvironment['default'].APP.name, _diindexEmberDevConfigEnvironment['default'].APP.version)
  };
});
define('diindex-ember-dev/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('diindex-ember-dev/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('diindex-ember-dev/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('diindex-ember-dev/initializers/export-application-global', ['exports', 'ember', 'diindex-ember-dev/config/environment'], function (exports, _ember, _diindexEmberDevConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_diindexEmberDevConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _diindexEmberDevConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_diindexEmberDevConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('diindex-ember-dev/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('diindex-ember-dev/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('diindex-ember-dev/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("diindex-ember-dev/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('diindex-ember-dev/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('diindex-ember-dev/router', ['exports', 'ember', 'diindex-ember-dev/config/environment'], function (exports, _ember, _diindexEmberDevConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _diindexEmberDevConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('top-ops');
    this.route('rig-count');
    this.route('us-permits');
    this.route('us-gas-prod-cap');
    this.route('us-oil-prod-cap');
    this.route('us-prod-cap');
    this.route('us-prod-cap-charts');
    this.route('top-ops-gas');
    this.route('top-ops-oil');
    this.route('top-counties-oil');
    this.route('top-counties-gas');
  });

  exports['default'] = Router;
});
/* jshint esversion: 6 */
define("diindex-ember-dev/routes/index", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			var settings = {
				"async": true,
				"crossDomain": true,
				"dataType": "jsonp",
				"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
				"method": "GET"
			};

			var capacity_settings = {
				"async": settings.async,
				"crossDomain": settings.crossDomain,
				"dataType": "jsonp",
				"url": settings.url,
				"method": settings.method,
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_production_capacity?$format=json"
				}
			};

			var rig_count_settings = {
				"async": settings.async,
				"crossDomain": settings.crossDomain,
				"dataType": "jsonp",
				"url": settings.url,
				"method": settings.method,
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_rig_count?$format=json"
				}
			};

			var tc_gas_settings = {
				"async": settings.async,
				"crossDomain": settings.crossDomain,
				"dataType": "jsonp",
				"url": settings.url,
				"method": settings.method,
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_top_gas_county?$format=json"
				}
			};

			var tc_oil_settings = {
				"async": settings.async,
				"crossDomain": settings.crossDomain,
				"dataType": "jsonp",
				"url": settings.url,
				"method": settings.method,
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_top_oil_county?$format=json"
				}
			};

			var to_gas_settings = {
				"async": settings.async,
				"crossDomain": settings.crossDomain,
				"dataType": "jsonp",
				"url": settings.url,
				"method": settings.method,
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_top_gas_operator$format=json"
				}
			};

			var to_oil_settings = {
				"async": settings.async,
				"crossDomain": settings.crossDomain,
				"dataType": "jsonp",
				"url": settings.url,
				"method": settings.method,
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_top_oil_operator?$format=json"
				}
			};

			var permit_count_settings = {
				"async": settings.async,
				"crossDomain": settings.crossDomain,
				"dataType": "jsonp",
				"url": settings.url,
				"method": settings.method,
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_permit_count?$format=json"
				}
			};

			var data = new _ember["default"].RSVP.hash({

				prodCapacity: $.ajax(capacity_settings).then(

				/** 
     * We will want to return another hash here to cover the following:
     *  - US Gas Production Capacity (tile)
     *  - US Oil Production Capacity (tile)
     *  - US MBOE Production Capacity (tile)
     *  - MBOE (chart)
     *  - Gas vs Oil Production Capacity (chart)
     */

				function (data) {
					if (data.status.http_code !== 200) return;

					var prodCapData = {
						usProdCap: data.contents.elements.slice(0, 1)
					};

					var highchart_series = [],
					    oil_series = [],
					    gas_series = [],
					   
					// most recent month of data should be the last data point
					ordered_data = data.contents.elements.reverse();
					// return a max of six months of data
					ordered_data = ordered_data.slice(Math.max(ordered_data.length - 6, 0));

					$.each(ordered_data, function () {
						highchart_series.push(this.newboeproduction_mboeperday);
						oil_series.push(this.newoilproduction_mbblperday);
						gas_series.push(this.newgasproduction_bcfperday);
					});

					// chart series - total energy production
					var series_mboe = [{
						pointStart: Date.parse(ordered_data[0].rundatetime),
						data: highchart_series
					}];

					prodCapData.usProdCapMboeChart = series_mboe;

					// chart series - oil vs gas production
					var series_oil_v_gas = [{
						name: 'Oil',
						pointStart: Date.parse(ordered_data[0].rundatetime),
						data: oil_series,
						yAxis: 0
					}, {
						name: 'Gas',
						pointStart: Date.parse(ordered_data[0].rundatetime),
						data: gas_series,
						yAxis: 1
					}];

					prodCapData.prodOilVsGas = series_oil_v_gas;

					return prodCapData;
				}),

				rigCount: $.ajax(rig_count_settings).then(
				// needs to return tile and chart
				function (data) {

					if (data.status.http_code !== 200) return;

					var highchart_series = [];
					var ordered_data = data.contents.elements.reverse();

					$.each(ordered_data, function () {
						highchart_series.push(this.rig_count);
					});
					highchart_series = highchart_series.reverse();

					var series = [{
						pointStart: Date.parse(ordered_data[0].rig_date),
						pointInterval: 24 * 3600 * 1000, // one day
						// return a max of thirty days of data
						data: highchart_series.slice(Math.max(highchart_series.length - 30, 0))
					}];
					return series;
				}),

				topCountiesGas: $.ajax(tc_gas_settings).then(function (data) {
					var topten = {
						labels: ['', 'County', 'State', 'Prev.', 'MMCF/Day'],
						data: []
					};

					$.each(data.contents.elements, function () {
						topten.data.push([this.rank, this.county.slice(0, this.county.length - 4).trim(), this.county.slice(-4).replace(/[()]/g, ''), this.prevrank || '--', this.gasproduction_mmcfperday]);
					});

					return topten;
				}),

				topCountiesOil: $.ajax(tc_oil_settings).then(function (data) {
					var topten = {
						labels: ['', 'County', 'State', 'Prev.', 'MBBL/Day'],
						data: []
					};

					$.each(data.contents.elements, function () {
						topten.data.push([this.rank, this.county.slice(0, this.county.length - 4).trim(), this.county.slice(-4).replace(/[()]/g, ''), this.prevrank, this.oilproduction_mbblperday]);
					});

					return topten;
				}),

				topOperatorsGas: $.ajax(to_gas_settings).then(function (data) {
					var topten = {
						labels: ['', 'Operator', 'Prev.', 'MMCF/Day'],
						data: []
					};

					$.each(data.contents.elements, function () {
						topten.data.push([this.rank, this.operator, this.prevrank, this.gasproduction_mmcfperday]);
					});

					return topten;
				}),

				topOperatorsOil: $.ajax(to_oil_settings).then(function (data) {
					var topten = {
						labels: ['', 'Operator', 'Prev.', 'MBBL/Day'],
						data: []
					};

					$.each(data.contents.elements, function () {
						topten.data.push([this.rank, this.operator, this.prevrank, this.oilproduction_mbblperday]);
					});

					return topten;
				}),

				permitCount: $.ajax(permit_count_settings).then(
				// needs to return tile and chart
				function (data) {
					if (data.status.http_code !== 200) return;

					var permitData = {};

					var highchart_series = [];
					var ordered_data = data.contents.elements.reverse();

					$.each(ordered_data, function () {
						highchart_series.push(this.rig_count);
					});
					highchart_series = highchart_series.reverse();

					var series = [{
						pointStart: Date.parse(ordered_data[0].rig_date),
						pointInterval: 24 * 3600 * 1000, // one day
						// return a max of thirty days of data
						data: highchart_series.slice(Math.max(highchart_series.length - 30, 0))
					}];

					permitData.chart = series;
					return permitData;
				})
			});

			console.log(data);

			return data;
		}
	});
});
define("diindex-ember-dev/routes/rig-count", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			var settings = {
				"async": true,
				"crossDomain": true,
				"dataType": "jsonp",
				"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_rig_count?%24format=json"
				},
				"method": "GET"
			};

			return $.ajax(settings).then(function (data) {
				return data.contents.elements.slice(Math.max(data.contents.elements.length - 30, 0));
			});
		}
	});
});
define("diindex-ember-dev/routes/top-counties-gas", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			var settings = {
				"async": true,
				"crossDomain": true,
				"dataType": "jsonp",
				"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_top_gas_county?%24format=json"
				},
				"method": "GET"
			};

			return $.ajax(settings).then(function (data) {
				return data.contents.elements;
			});
		}
	});
});
define("diindex-ember-dev/routes/top-counties-oil", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			var settings = {
				"async": true,
				"crossDomain": true,
				"dataType": "jsonp",
				"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_top_oil_county?%24format=json"
				},
				"method": "GET"
			};

			return $.ajax(settings).then(function (data) {
				return data.contents.elements;
			});
		}
	});
});
define("diindex-ember-dev/routes/top-ops-gas", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			var settings = {
				"async": true,
				"crossDomain": true,
				"dataType": "jsonp",
				"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_top_gas_operator?%24format=json"
				},
				"method": "GET"
			};

			return $.ajax(settings).then(function (data) {
				return data.contents.elements;
			});
		}
	});
});
define("diindex-ember-dev/routes/top-ops-oil", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			var settings = {
				"async": true,
				"crossDomain": true,
				"dataType": "jsonp",
				"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_top_oil_operator?%24format=json"
				},
				"method": "GET"
			};

			return $.ajax(settings).then(function (data) {
				return data.contents.elements;
			});
		}
	});
});
define('diindex-ember-dev/routes/top-ops', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("diindex-ember-dev/routes/us-gas-prod-cap", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			var settings = {
				"async": true,
				"crossDomain": true,
				"dataType": "jsonp",
				"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_production_capacity?$format=json"
				},
				"method": "GET"
			};

			return $.ajax(settings).then(function (data) {
				return data.contents.elements.slice(Math.max(data.contents.elements.length - 7, 0));
			});
		}
	});
});
/* globals $ */
define("diindex-ember-dev/routes/us-oil-prod-cap", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			var settings = {
				"async": true,
				"crossDomain": true,
				"dataType": "jsonp",
				"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_production_capacity?$format=json"
				},
				"method": "GET"
			};

			return $.ajax(settings).then(function (data) {
				return data.contents.elements.slice(Math.max(data.contents.elements.length - 7, 0));
			});
		}
	});
});
/* globals $ */
define("diindex-ember-dev/routes/us-permits", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			var settings = {
				"async": true,
				"crossDomain": true,
				"dataType": "jsonp",
				"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_permit_count?%24format=json"
				},
				"method": "GET"
			};

			return $.ajax(settings).then(function (data) {
				return data.contents.elements;
			});
		}
	});
});
define("diindex-ember-dev/routes/us-prod-cap-charts", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			var mboe_settings = {
				"async": true,
				"crossDomain": true,
				"dataType": "jsonp",
				"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_production_capacity?$format=json"
				},
				"method": "GET"
			};

			var rig_settings = {
				"async": true,
				"crossDomain": true,
				"dataType": "jsonp",
				"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_rig_count?%24format=json"
				},
				"method": "GET"
			};

			return new _ember["default"].RSVP.hash({

				mboe: $.ajax(mboe_settings).then(function (data) {
					var highchart_series = [];
					var ordered_data = data.contents.elements.reverse();

					$.each(ordered_data, function () {
						highchart_series.push(this.newboeproduction_mboeperday);
					});

					highchart_series = highchart_series.reverse();

					var series = [{
						pointStart: Date.parse(ordered_data[0].rundatetime),
						// return a max of seven months of data
						data: highchart_series.slice(Math.max(highchart_series.length - 7, 0))
					}];
					return series;
				}),

				rigCount: $.ajax(rig_settings).then(function (data) {
					var highchart_series = [];
					var ordered_data = data.contents.elements.reverse();

					$.each(ordered_data, function () {
						highchart_series.push(this.rig_count);
					});
					highchart_series = highchart_series.reverse();

					var series = [{
						pointStart: Date.parse(ordered_data[0].rig_date),
						pointInterval: 24 * 3600 * 1000, // one day
						// return a max of thirty days of data
						data: highchart_series.slice(Math.max(highchart_series.length - 30, 0))
					}];
					return series;
				})
			});
		}
	});
});
define("diindex-ember-dev/routes/us-prod-cap", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			var settings = {
				"async": true,
				"crossDomain": true,
				"dataType": "jsonp",
				"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
				"data": {
					"url": "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_production_capacity?$format=json"
				},
				"method": "GET"
			};

			return $.ajax(settings).then(function (data) {
				return data.contents.elements.slice(Math.max(data.contents.elements.length - 7, 0));
			});
		}
	});
});
define('diindex-ember-dev/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("diindex-ember-dev/templates/application-error", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "diindex-ember-dev/templates/application-error.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "large-12 columns");
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("An application error has occurred.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "top-bar");
        dom.setAttribute(el1, "data-topbar", "");
        dom.setAttribute(el1, "role", "navigation");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "title-area");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "name");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h1");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "#");
        var el6 = dom.createTextNode("DI Index Test Suite");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n     ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Remove the class \"menu-icon\" to get rid of menu icon. Take out \"Menu\" to just have icon alone ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "toggle-topbar menu-icon");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createElement("span");
        var el6 = dom.createTextNode("Menu");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("section class=\"top-bar-section\">\n    <!-- Left Nav Section >\n    <ul class=\"right\">\n      <li>{{#link-to 'us-gas-prod-cap'}}Gas Production{{/link-to}}</li>\n      <li>{{#link-to 'us-oil-prod-cap'}}Oil Production{{/link-to}}</li>\n      <li>{{#link-to 'us-prod-cap'}}U.S. Production Capacity{{/link-to}}</li>\n    </ul>\n  </section");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "large-12 columns");
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 1, 1);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [22, 1], [22, 11]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/components/gas-production-widget", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "diindex-ember-dev/templates/components/gas-production-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Data not available.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 0
              },
              "end": {
                "line": 9,
                "column": 0
              }
            },
            "moduleName": "diindex-ember-dev/templates/components/gas-production-widget.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("BCF Per Day: ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(", ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element0, 1, 1);
            morphs[1] = dom.createUnsafeMorphAt(element0, 3, 3);
            return morphs;
          },
          statements: [["content", "month.newgasproduction_bcfperday", ["loc", [null, [8, 18], [8, 54]]]], ["inline", "delta-direction", [["get", "month.pctchggas", ["loc", [null, [8, 75], [8, 90]]]]], [], ["loc", [null, [8, 56], [8, 93]]]]],
          locals: ["month"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "diindex-ember-dev/templates/components/gas-production-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("ul");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "months", ["loc", [null, [7, 8], [7, 14]]]]], [], 0, null, ["loc", [null, [7, 0], [9, 9]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 7
          }
        },
        "moduleName": "diindex-ember-dev/templates/components/gas-production-widget.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["get", "months", ["loc", [null, [1, 10], [1, 16]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 11]]]], ["block", "if", [["get", "months", ["loc", [null, [5, 6], [5, 12]]]]], [], 1, null, ["loc", [null, [5, 0], [11, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("diindex-ember-dev/templates/components/high-charts", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/components/high-charts.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/components/oil-production-widget", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "diindex-ember-dev/templates/components/oil-production-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Data not available.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 0
              },
              "end": {
                "line": 9,
                "column": 0
              }
            },
            "moduleName": "diindex-ember-dev/templates/components/oil-production-widget.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("MBBL Per Day: ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(", ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element0, 1, 1);
            morphs[1] = dom.createUnsafeMorphAt(element0, 3, 3);
            return morphs;
          },
          statements: [["content", "month.newoilproduction_mbblperday", ["loc", [null, [8, 19], [8, 56]]]], ["inline", "delta-direction", [["get", "month.pctchgoil", ["loc", [null, [8, 77], [8, 92]]]]], [], ["loc", [null, [8, 58], [8, 95]]]]],
          locals: ["month"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "diindex-ember-dev/templates/components/oil-production-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("ul");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "months", ["loc", [null, [7, 8], [7, 14]]]]], [], 0, null, ["loc", [null, [7, 0], [9, 9]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 7
          }
        },
        "moduleName": "diindex-ember-dev/templates/components/oil-production-widget.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["get", "months", ["loc", [null, [1, 10], [1, 16]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 11]]]], ["block", "if", [["get", "months", ["loc", [null, [5, 6], [5, 12]]]]], [], 1, null, ["loc", [null, [5, 0], [11, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("diindex-ember-dev/templates/components/permit-count-chart", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/components/permit-count-chart.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/components/rig-count-chart", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/components/rig-count-chart.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/components/top-ten", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 1
              },
              "end": {
                "line": 6,
                "column": 1
              }
            },
            "moduleName": "diindex-ember-dev/templates/components/top-ten.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("th");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "label", ["loc", [null, [5, 6], [5, 15]]]]],
          locals: ["label"],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.5",
              "loc": {
                "source": null,
                "start": {
                  "line": 10,
                  "column": 1
                },
                "end": {
                  "line": 12,
                  "column": 1
                }
              },
              "moduleName": "diindex-ember-dev/templates/components/top-ten.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("	");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("td");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["content", "el", ["loc", [null, [11, 5], [11, 11]]]]],
            locals: ["el"],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 0
              },
              "end": {
                "line": 14,
                "column": 0
              }
            },
            "moduleName": "diindex-ember-dev/templates/components/top-ten.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("	");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["block", "each", [["get", "item", ["loc", [null, [10, 9], [10, 13]]]]], [], 0, null, ["loc", [null, [10, 1], [12, 10]]]]],
          locals: ["item"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "diindex-ember-dev/templates/components/top-ten.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("table");
          dom.setAttribute(el1, "width", "100%");
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tr");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("	");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["block", "each", [["get", "obj.labels", ["loc", [null, [4, 9], [4, 19]]]]], [], 0, null, ["loc", [null, [4, 1], [6, 10]]]], ["block", "each", [["get", "obj.data", ["loc", [null, [8, 8], [8, 16]]]]], [], 1, null, ["loc", [null, [8, 0], [14, 9]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "diindex-ember-dev/templates/components/top-ten.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Data not available.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 7
          }
        },
        "moduleName": "diindex-ember-dev/templates/components/top-ten.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "obj.data", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [18, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("diindex-ember-dev/templates/components/us-permit-count-widget", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/components/us-permit-count-widget.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/components/us-prod-by-type-chart", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/components/us-prod-by-type-chart.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/components/us-prod-cap-chart", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/components/us-prod-cap-chart.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/components/us-production-capacity-widget", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 0
              },
              "end": {
                "line": 5,
                "column": 0
              }
            },
            "moduleName": "diindex-ember-dev/templates/components/us-production-capacity-widget.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("MBOE Per Day: ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(", ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element0, 1, 1);
            morphs[1] = dom.createUnsafeMorphAt(element0, 3, 3);
            return morphs;
          },
          statements: [["content", "month.newboeproduction_mboeperday", ["loc", [null, [4, 19], [4, 56]]]], ["inline", "delta-direction", [["get", "month.pctchgboe", ["loc", [null, [4, 77], [4, 92]]]]], [], ["loc", [null, [4, 58], [4, 95]]]]],
          locals: ["month"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "diindex-ember-dev/templates/components/us-production-capacity-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("ul");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "months", ["loc", [null, [3, 8], [3, 14]]]]], [], 0, null, ["loc", [null, [3, 0], [5, 9]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "diindex-ember-dev/templates/components/us-production-capacity-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Data not available.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 7
          }
        },
        "moduleName": "diindex-ember-dev/templates/components/us-production-capacity-widget.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "months", ["loc", [null, [1, 6], [1, 12]]]]], [], 0, 1, ["loc", [null, [1, 0], [9, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("diindex-ember-dev/templates/components/us-rig-count-widget", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/components/us-rig-count-widget.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 6,
              "column": 2
            }
          },
          "moduleName": "diindex-ember-dev/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "rig-count-chart", [], ["content", ["subexpr", "@mut", [["get", "model.rigCount", ["loc", [null, [5, 28], [5, 42]]]]], [], []]], ["loc", [null, [5, 2], [5, 44]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 2
            },
            "end": {
              "line": 8,
              "column": 2
            }
          },
          "moduleName": "diindex-ember-dev/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Rig Count data is not available at this time.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 2
            },
            "end": {
              "line": 14,
              "column": 2
            }
          },
          "moduleName": "diindex-ember-dev/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "permit-count-chart", [], ["content", ["subexpr", "@mut", [["get", "model.permitCount.chart", ["loc", [null, [13, 31], [13, 54]]]]], [], []]], ["loc", [null, [13, 2], [13, 56]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 2
            },
            "end": {
              "line": 16,
              "column": 2
            }
          },
          "moduleName": "diindex-ember-dev/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Permit Count data is not available at this time.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 2
            },
            "end": {
              "line": 22,
              "column": 2
            }
          },
          "moduleName": "diindex-ember-dev/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "rig-count-chart-other", [], ["content", ["subexpr", "@mut", [["get", "model.rigCount", ["loc", [null, [21, 34], [21, 48]]]]], [], []]], ["loc", [null, [21, 2], [21, 50]]]]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 2
            },
            "end": {
              "line": 24,
              "column": 2
            }
          },
          "moduleName": "diindex-ember-dev/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Rig Count data is not available at this time.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 2
            },
            "end": {
              "line": 46,
              "column": 2
            }
          },
          "moduleName": "diindex-ember-dev/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "large-6 columns");
          var el2 = dom.createTextNode("\n\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("U.S. Production Capacity");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "large-6 columns");
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("U.S. Oil Production Capacity");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("U.S. Gas Production Capacity");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(fragment, [3]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(element2, 3, 3);
          morphs[1] = dom.createMorphAt(element2, 5, 5);
          morphs[2] = dom.createMorphAt(element3, 3, 3);
          morphs[3] = dom.createMorphAt(element3, 7, 7);
          morphs[4] = dom.createMorphAt(element3, 9, 9);
          return morphs;
        },
        statements: [["inline", "us-production-capacity-widget", [], ["months", ["subexpr", "@mut", [["get", "model.prodCapacity.usProdCap", ["loc", [null, [36, 42], [36, 70]]]]], [], []]], ["loc", [null, [36, 3], [36, 72]]]], ["inline", "us-prod-cap-chart", [], ["content", ["subexpr", "@mut", [["get", "model.prodCapacity.usProdCapMboeChart", ["loc", [null, [37, 31], [37, 68]]]]], [], []]], ["loc", [null, [37, 3], [37, 70]]]], ["inline", "oil-production-widget", [], ["months", ["subexpr", "@mut", [["get", "model.prodCapacity.usProdCap", ["loc", [null, [41, 34], [41, 62]]]]], [], []]], ["loc", [null, [41, 3], [41, 64]]]], ["inline", "gas-production-widget", [], ["months", ["subexpr", "@mut", [["get", "model.prodCapacity.usProdCap", ["loc", [null, [43, 34], [43, 62]]]]], [], []]], ["loc", [null, [43, 3], [43, 64]]]], ["inline", "us-prod-by-type-chart", [], ["content", ["subexpr", "@mut", [["get", "model.prodCapacity.prodOilVsGas", ["loc", [null, [44, 35], [44, 66]]]]], [], []]], ["loc", [null, [44, 3], [44, 68]]]]],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 46,
              "column": 2
            },
            "end": {
              "line": 48,
              "column": 2
            }
          },
          "moduleName": "diindex-ember-dev/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Production Capacity data is not available at this time.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child8 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 56,
              "column": 2
            },
            "end": {
              "line": 71,
              "column": 2
            }
          },
          "moduleName": "diindex-ember-dev/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "large-6 columns");
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("New Production by ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("strong");
          var el4 = dom.createTextNode("Operators");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("Gas");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("Oil");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "large-6 columns");
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("New Production by ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("strong");
          var el4 = dom.createTextNode("Counties");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("Gas");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("Oil");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(fragment, [3]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(element0, 5, 5);
          morphs[1] = dom.createMorphAt(element0, 9, 9);
          morphs[2] = dom.createMorphAt(element1, 5, 5);
          morphs[3] = dom.createMorphAt(element1, 9, 9);
          return morphs;
        },
        statements: [["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topOperatorsGas", ["loc", [null, [60, 17], [60, 38]]]]], [], []]], ["loc", [null, [60, 3], [60, 40]]]], ["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topOperatorsOil", ["loc", [null, [62, 17], [62, 38]]]]], [], []]], ["loc", [null, [62, 3], [62, 40]]]], ["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topCountiesGas", ["loc", [null, [67, 17], [67, 37]]]]], [], []]], ["loc", [null, [67, 3], [67, 39]]]], ["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topCountiesOil", ["loc", [null, [69, 17], [69, 37]]]]], [], []]], ["loc", [null, [69, 3], [69, 39]]]]],
        locals: [],
        templates: []
      };
    })();
    var child9 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 71,
              "column": 2
            },
            "end": {
              "line": 73,
              "column": 2
            }
          },
          "moduleName": "diindex-ember-dev/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Production Capacity data is not available at this time.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 96,
            "column": 6
          }
        },
        "moduleName": "diindex-ember-dev/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "large-6 columns");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createTextNode("Rig Count");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "large-6 columns");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createTextNode("Permit Count");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "large-6 columns");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createTextNode("Rig Count Other");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" end .row ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" First Tab - Production Capacity ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "large-12 columns panel");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Production Capacity");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" end .row ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Second Tab - Top Ten Lists ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "large-12 columns panel");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Top Ten");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" end .row ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Third Tab - Maps ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" \n	So I have a couple of ideas on implementation for this. But this is the best one.\n	We will use Wordpress' REST API to pull custom image fields from a node where \n	they select two images and two PDFs from the media library, one of each for wells and rigs.\n	That way we don't have to rebuild the app or overwrite any imagery; we just pull\n	the data real-time same as we are doing everything else.\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "large-12 columns panel");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Maps");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "large-6 columns");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        var el5 = dom.createTextNode("New Wells");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "src", "http://diindex.drillinginfo.com/wp-content/uploads/2016/04/Marchnewwells.png");
        dom.setAttribute(el4, "alt", "New Wells Map: March 2016");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "large-6 columns");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        var el5 = dom.createTextNode("Rig Movement");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "src", "http://diindex.drillinginfo.com/wp-content/uploads/2016/04/marchrigmovement.png");
        dom.setAttribute(el4, "alt", "Rig Movement Map: March 2016");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [0]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element4, [1]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element4, [3]), 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element4, [5]), 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [5, 1]), 3, 3);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [10, 1]), 3, 3);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.rigCount", ["loc", [null, [4, 8], [4, 22]]]]], [], 0, 1, ["loc", [null, [4, 2], [8, 9]]]], ["block", "if", [["get", "model.permitCount.chart", ["loc", [null, [12, 8], [12, 31]]]]], [], 2, 3, ["loc", [null, [12, 2], [16, 9]]]], ["block", "if", [["get", "model.rigCount", ["loc", [null, [20, 8], [20, 22]]]]], [], 4, 5, ["loc", [null, [20, 2], [24, 9]]]], ["block", "if", [["get", "model.prodCapacity", ["loc", [null, [32, 8], [32, 26]]]]], [], 6, 7, ["loc", [null, [32, 2], [48, 9]]]], ["block", "if", [["get", "model.topCountiesGas", ["loc", [null, [56, 8], [56, 28]]]]], [], 8, 9, ["loc", [null, [56, 2], [73, 9]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9]
    };
  })());
});
define("diindex-ember-dev/templates/rig-count", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/rig-count.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("U.S. Rig Count");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/top-counties-gas", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/top-counties-gas.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/top-counties-oil", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/top-counties-oil.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/top-ops-gas", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/top-ops-gas.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/top-ops-oil", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/top-ops-oil.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/top-ops", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/top-ops.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Top 10 Operators");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/us-gas-prod-cap", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/us-gas-prod-cap.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("U.S. Gas Production Capacity");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["inline", "gas-production-widget", [], ["months", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 31], [2, 36]]]]], [], []]], ["loc", [null, [2, 0], [2, 38]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/us-oil-prod-cap", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 38
          }
        },
        "moduleName": "diindex-ember-dev/templates/us-oil-prod-cap.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("U.S. Oil Production Capacity");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "oil-production-widget", [], ["months", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 31], [2, 36]]]]], [], []]], ["loc", [null, [2, 0], [2, 38]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/us-permits", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/us-permits.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("U.S. Permits");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/us-prod-cap-charts", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "diindex-ember-dev/templates/us-prod-cap-charts.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("U.S. Production Capacity Charts");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]], ["inline", "us-prod-cap-chart", [], ["content", ["subexpr", "@mut", [["get", "model.mboe", ["loc", [null, [3, 28], [3, 38]]]]], [], []]], ["loc", [null, [3, 0], [3, 40]]]], ["inline", "rig-count-chart", [], ["content", ["subexpr", "@mut", [["get", "model.rigCount", ["loc", [null, [5, 26], [5, 40]]]]], [], []]], ["loc", [null, [5, 0], [5, 42]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/us-prod-cap", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 3
            },
            "end": {
              "line": 3,
              "column": 46
            }
          },
          "moduleName": "diindex-ember-dev/templates/us-prod-cap.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("See Charts");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 62
          }
        },
        "moduleName": "diindex-ember-dev/templates/us-prod-cap.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("U.S. Production Capacity");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]), 0, 0);
        return morphs;
      },
      statements: [["inline", "us-production-capacity-widget", [], ["months", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 39], [2, 44]]]]], [], []]], ["loc", [null, [2, 0], [2, 46]]]], ["block", "link-to", ["us-prod-cap-charts"], [], 0, null, ["loc", [null, [3, 3], [3, 58]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('diindex-ember-dev/themes/drillinginfo', ['exports'], function (exports) {
	/**
  * Dark blue theme for Highcharts JS
  * @author Torstein Honsi
  */

	// Load the fonts
	Highcharts.createElement('link', {
		href: 'https:https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300',
		rel: 'stylesheet',
		type: 'text/css'
	}, null, document.getElementsByTagName('head')[0]);

	exports['default'] = Highcharts.extend({
		colors: ["#78be20", "#1d54a0", "#585b5d"],
		chart: {
			backgroundColor: '#fff',
			style: {
				fontFamily: '"Open Sans Condensed", sans-serif;',
				color: '#ffffff'
			},
			plotBorderColor: '#333333'
		},
		title: {
			style: {
				color: '#585b5d',
				textTransform: 'uppercase',
				fontSize: '20px'
			}
		},
		subtitle: {
			style: {
				color: '#000000',
				textTransform: 'uppercase'
			}
		},
		xAxis: {
			visible: true,
			gridLineColor: '#fff',
			gridLineWidth: 1,
			labels: {
				style: {
					color: '#333'
				}
			},
			lineColor: '#333',
			lineWidth: 1,
			minorGridLineColor: '#333',
			minorGridLineWidth: 1,
			minorTickLength: 0,
			tickLength: 0,
			tickWidth: 0,
			title: {
				style: {
					color: '#333'

				}
			}
		},
		yAxis: {
			visible: true,
			gridLineColor: '#e9e7e4',
			gridLineWidth: 1,
			labels: {
				style: {
					color: '#333'
				}
			},
			lineColor: '#333',
			lineWidth: 0,
			minorGridLineColor: '#000000',
			minorGridLineWidth: 1,
			minorTickLength: 0,
			tickLength: 0,
			tickWidth: 0,
			title: {
				style: {
					color: '#333'

				}
			}
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y}</b><br/>',
			backgroundColor: '#585b5d',
			style: {
				color: '#FFF',
				fontSize: '15px',
				padding: '8px'
			}
		},
		plotOptions: {
			column: {
				borderWidth: 0,
				dataLabels: {
					color: '#ffffff'
				}
			},
			boxplot: {
				fillColor: '#505053'
			},
			candlestick: {
				lineColor: 'white'
			},
			errorbar: {
				color: 'white'
			},
			area: {
				showInLegend: false,
				marker: {
					enabled: false,
					fillColor: '#585b5d',
					symbol: 'circle',
					radius: 2,
					states: {
						hover: {
							enabled: true
						}
					}
				}
			},
			line: {
				lineWidth: 2,
				marker: {
					lineWidth: 2,
					lineColor: '#fff',
					fillColor: '#585b5d',
					symbol: 'circle',
					radius: 8
				}
			}
		},
		legend: {
			itemStyle: {
				color: '#333'
			},
			itemHoverStyle: {
				color: 'red'
			},
			itemHiddenStyle: {
				color: '#606063'
			}
		},
		credits: {
			style: {
				color: '#666'
			}
		},
		labels: {
			style: {
				color: '#ffffff'
			}
		},

		drilldown: {
			activeAxisLabelStyle: {
				color: '#F0F0F3'
			},
			activeDataLabelStyle: {
				color: '#F0F0F3'
			}
		},

		navigation: {
			buttonOptions: {
				symbolStroke: '#DDDDDD',
				theme: {
					fill: '#505053'
				}
			}
		},

		// scroll charts
		rangeSelector: {
			buttonTheme: {
				fill: '#505053',
				stroke: '#000000',
				style: {
					color: '#CCC'
				},
				states: {
					hover: {
						fill: '#707073',
						stroke: '#000000',
						style: {
							color: 'white'
						}
					},
					select: {
						fill: '#000003',
						stroke: '#000000',
						style: {
							color: 'white'
						}
					}
				}
			},
			inputBoxBorderColor: '#505053',
			inputStyle: {
				backgroundColor: '#333',
				color: 'silver'
			},
			labelStyle: {
				color: 'silver'
			}
		},

		navigator: {
			handles: {
				backgroundColor: '#666',
				borderColor: '#AAA'
			},
			outlineColor: '#CCC',
			maskFill: 'rgba(255,255,255,0.1)',
			series: {
				color: '#7798BF',
				lineColor: '#A6C7ED'
			},
			xAxis: {
				gridLineColor: '#505053'
			}
		},

		scrollbar: {
			barBackgroundColor: '#808083',
			barBorderColor: '#808083',
			buttonArrowColor: '#CCC',
			buttonBackgroundColor: '#606063',
			buttonBorderColor: '#606063',
			rifleColor: '#FFF',
			trackBackgroundColor: '#404043',
			trackBorderColor: '#404043'
		},

		// special colors for some of the
		legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
		background2: '#505053',
		dataLabelsColor: '#B0B0B3',
		textColor: '#C0C0C0',
		contrastTextColor: '#F0F0F3',
		maskColor: 'rgba(255,255,255,0.3)'
	});
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('diindex-ember-dev/config/environment', ['ember'], function(Ember) {
  var prefix = 'diindex-ember-dev';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("diindex-ember-dev/app")["default"].create({"name":"diindex-ember-dev","version":"0.0.0+308ef2f9"});
}

/* jshint ignore:end */
//# sourceMappingURL=diindex-ember-dev.map