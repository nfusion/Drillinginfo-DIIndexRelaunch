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
define('diindex-ember-dev/breakpoints', ['exports'], function (exports) {
	exports['default'] = {
		small: '(min-width: 0)',
		medium: '(max-width: 640px)',
		large: '(min-width: 1024px)',
		xlarge: '(min-width: 1200px)',
		xxlarge: '(min-width: 1440px)'
	};
});
define('diindex-ember-dev/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'diindex-ember-dev/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _diindexEmberDevConfigEnvironment) {

  var name = _diindexEmberDevConfigEnvironment['default'].APP.name;
  var version = _diindexEmberDevConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('diindex-ember-dev/components/data-widget', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		classNames: ['data-widget-wrapper'],
		dateToBottom: _ember['default'].computed(function () {
			var widgetOptions = this.get('widgetOptions');
			return widgetOptions.datePosition == 'bottom';
		})
	});
});
define('diindex-ember-dev/components/high-charts', ['exports', 'ember-highcharts/components/high-charts'], function (exports, _emberHighchartsComponentsHighCharts) {
  exports['default'] = _emberHighchartsComponentsHighCharts['default'];
});
define('diindex-ember-dev/components/top-ten', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('diindex-ember-dev/components/zf-accordion-menu', ['exports', 'ember-cli-foundation-6-sass/components/zf-accordion-menu'], function (exports, _emberCliFoundation6SassComponentsZfAccordionMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfAccordionMenu['default'];
    }
  });
});
define('diindex-ember-dev/components/zf-accordion', ['exports', 'ember-cli-foundation-6-sass/components/zf-accordion'], function (exports, _emberCliFoundation6SassComponentsZfAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfAccordion['default'];
    }
  });
});
define('diindex-ember-dev/components/zf-drilldown-menu', ['exports', 'ember-cli-foundation-6-sass/components/zf-drilldown-menu'], function (exports, _emberCliFoundation6SassComponentsZfDrilldownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfDrilldownMenu['default'];
    }
  });
});
define('diindex-ember-dev/components/zf-dropdown-menu', ['exports', 'ember-cli-foundation-6-sass/components/zf-dropdown-menu'], function (exports, _emberCliFoundation6SassComponentsZfDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfDropdownMenu['default'];
    }
  });
});
define('diindex-ember-dev/components/zf-dropdown', ['exports', 'ember-cli-foundation-6-sass/components/zf-dropdown'], function (exports, _emberCliFoundation6SassComponentsZfDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfDropdown['default'];
    }
  });
});
define('diindex-ember-dev/components/zf-magellan', ['exports', 'ember-cli-foundation-6-sass/components/zf-magellan'], function (exports, _emberCliFoundation6SassComponentsZfMagellan) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfMagellan['default'];
    }
  });
});
define('diindex-ember-dev/components/zf-off-canvas', ['exports', 'ember-cli-foundation-6-sass/components/zf-off-canvas'], function (exports, _emberCliFoundation6SassComponentsZfOffCanvas) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfOffCanvas['default'];
    }
  });
});
define('diindex-ember-dev/components/zf-orbit', ['exports', 'ember-cli-foundation-6-sass/components/zf-orbit'], function (exports, _emberCliFoundation6SassComponentsZfOrbit) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfOrbit['default'];
    }
  });
});
define('diindex-ember-dev/components/zf-reveal', ['exports', 'ember-cli-foundation-6-sass/components/zf-reveal'], function (exports, _emberCliFoundation6SassComponentsZfReveal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfReveal['default'];
    }
  });
});
define('diindex-ember-dev/components/zf-slider', ['exports', 'ember-cli-foundation-6-sass/components/zf-slider'], function (exports, _emberCliFoundation6SassComponentsZfSlider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfSlider['default'];
    }
  });
});
define('diindex-ember-dev/components/zf-tabs', ['exports', 'ember-cli-foundation-6-sass/components/zf-tabs'], function (exports, _emberCliFoundation6SassComponentsZfTabs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfTabs['default'];
    }
  });
});
define('diindex-ember-dev/components/zf-tooltip', ['exports', 'ember-cli-foundation-6-sass/components/zf-tooltip'], function (exports, _emberCliFoundation6SassComponentsZfTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfTooltip['default'];
    }
  });
});
define('diindex-ember-dev/controllers/application-loading', ['exports', 'ember', 'diindex-ember-dev/config/environment'], function (exports, _ember, _diindexEmberDevConfigEnvironment) {
	exports['default'] = _ember['default'].Controller.extend({
		isProduction: _ember['default'].computed(function () {
			return _diindexEmberDevConfigEnvironment['default'].environment === 'production';
		})
	});
});
define('diindex-ember-dev/controllers/index', ['exports', 'ember', 'diindex-ember-dev/themes/drillinginfo', 'diindex-ember-dev/config/environment'], function (exports, _ember, _diindexEmberDevThemesDrillinginfo, _diindexEmberDevConfigEnvironment) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {},
		// lower bounds for computed chart configuration properties
		prodCapMin: null,
		rigCountMin: null,
		// chart theme
		theme: _diindexEmberDevThemesDrillinginfo['default'],
		// chart configuration properties
		rigCount: _ember['default'].computed(function () {
			var rigConfig = {};
			rigConfig.chartOptions = {
				chart: {
					type: 'areaspline',
					zoomType: 'x',
					backgroundColor: '#585b5d',
					style: {
						borderRadius: '0 0 5px 5px'
					}
				},
				plotOptions: {
					areaspline: {
						showInLegend: false,
						fillColor: "#dc7c23",
						lineColor: "#dc7c23",
						lineWidth: 1,
						marker: {
							enabled: false,
							symbol: 'circle',
							radius: 4,
							fillColor: '#7293cb',
							states: {
								hover: {
									enabled: true,
									fillColor: '#eee'
								}
							}
						}
					}
				},
				subtitle: {
					text: document.ontouchstart === undefined ? 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
					style: {
						color: '#fff'
					}
				},
				xAxis: {
					type: 'datetime',
					title: {
						text: 'Date',
						style: {
							color: '#fff'
						}
					},
					lineColor: '#818485',
					labels: {
						style: {
							color: '#fff'
						}
					}
				},
				yAxis: {
					title: {
						text: 'Rig Count',
						style: {
							color: '#fff'
						}
					},
					min: null,
					lineColor: '#818485',
					labels: {
						style: {
							color: '#fff'
						}
					}
				}
			};
			rigConfig.chartOptions.yAxis.min = this.get('rigCountMin');
			rigConfig.widgetOptions = {
				title: 'U.S. Rig Count',
				units: '',
				dateFormat: 'MMMM DD, YYYY',
				interval: 'Daily',
				changeText: 'Since previous week'
			};
			return rigConfig;
		}),
		permitCount: {
			chartOptions: {
				chart: {
					type: 'line',
					backgroundColor: '#006f98',
					style: {
						borderRadius: '0 0 5px 5px'
					}
				},
				plotOptions: {
					line: {
						showInLegend: false,
						pointIntervalUnit: 'month',
						color: '#fff',
						lineWidth: 1,
						marker: {
							enabled: true,
							fillColor: '#fff'
						},
						states: {
							hover: {
								enabled: true,
								halo: {
									attributes: true,
									size: 10,
									opacity: 0.25
								}
							}
						}
					}
				},
				xAxis: {
					type: 'datetime',
					gridLineColor: 'transparent',
					title: {
						text: 'Date',
						style: {
							color: "#fff"
						}
					},
					labels: {
						useHTML: true,
						style: {
							color: "#fff",
							paddingTop: '15px'
						}
					},
					lineColor: '#4395b3'
				},
				yAxis: {
					title: {
						text: 'Permit Count',
						style: {
							color: "#fff"
						}
					},
					labels: {
						style: {
							color: "#fff"
						},
						padding: 0,
						step: 1
					},
					lineColor: '#4395b3'
				}
			},
			widgetOptions: {
				title: 'U.S. Permits',
				units: '',
				dateFormat: 'MMMM YYYY',
				interval: 'Monthly',
				changeText: 'Since previous month'
			}
		},
		prodCap: _ember['default'].computed(function () {
			var prodCapConfig = {};
			prodCapConfig.chartOptions = {
				chart: {
					type: 'areaspline'
				},
				plotOptions: {
					areaspline: {
						fillColor: {
							linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
							stops: [[0, '#7251a0'], [1, '#9165a9']]
						},
						lineColor: '#7251a0',
						lineWidth: 1,
						showInLegend: false,
						pointIntervalUnit: 'month',
						states: {
							hover: {
								color: '#b2df8a'
							}
						},
						marker: {
							enabled: true,
							symbol: 'circle',
							radius: 4,
							fillColor: '#7251a0',
							states: {
								hover: {
									enabled: true,
									fillColor: '#7251a0'
								}
							}
						}
					}
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
					min: null
				}
			};
			prodCapConfig.chartOptions.yAxis.min = this.get('prodCapMin');
			prodCapConfig.widgetOptions = {
				title: 'New U.S. Production Capacity',
				units: '',
				dateFormat: 'MMMM YYYY',
				datePosition: 'bottom',
				interval: '',
				changeText: 'Since previous month'
			};

			return prodCapConfig;
		}),
		prodCapByType: {
			chartOptions: {
				colors: ["#fff", "#e1974c", "#84ba5b"],
				chart: {
					type: 'line',
					backgroundColor: '#006f98',
					spacingRight: 20,
					spacingTop: 40,
					height: 315
				},
				plotOptions: {
					line: {
						showInLegend: true,
						pointIntervalUnit: 'month',
						//color: '#fff',
						lineWidth: 1,
						marker: {
							enabled: true
						},
						//fillColor: '#fff'
						states: {
							hover: {
								enabled: true,
								halo: {
									attributes: true,
									size: 10,
									opacity: 0.25
								}
							}
						}
					}
				},
				tooltip: {
					useHTML: true,
					pointFormat: '<span>{series.name}: </span>' + '<span style="text-align: right"><b>{point.y} Units</b></span>',
					style: {
						letterSpacing: "2px"
					}
				},
				xAxis: {
					gridLineWidth: 0,
					type: 'datetime',
					title: {
						text: 'Month',
						style: {
							color: "#fff"
						}
					},
					labels: {
						useHTML: true,
						style: {
							color: "#fff",
							paddingTop: '15px'
						}
					},
					lineColor: '#4395b3'
				},
				yAxis: [
				// oil
				{
					title: {
						text: 'MBBL/Day',
						style: { "color": "#fff", "fontSize": "0.625rem" }
					},
					labels: {
						style: { "color": "#fff" }
					},
					gridLineColor: '#4395b3'
				},
				//gas
				{
					title: {
						text: 'BCF/Day',
						style: { "color": "#fff", "fontSize": "0.625rem" }
					},
					labels: {
						style: { "color": "#fff" }
					},
					opposite: true,
					gridLineColor: '#4395b3' }]
			}
		},
		oilWidgetOptions: {
			title: 'Oil Production Capacity',
			units: 'MBBL/Day',
			dateFormat: 'MMMM YYYY',
			interval: '',
			changeText: 'Since previous month'
		},
		gasWidgetOptions: {
			title: 'Gas Production Capacity',
			units: 'BCF/Day',
			dateFormat: 'MMMM YYYY',
			interval: '',
			changeText: 'Since previous month'
		}
	});
});
define('diindex-ember-dev/helpers/delta-direction', ['exports', 'ember'], function (exports, _ember) {
	exports.deltaDirection = deltaDirection;

	function deltaDirection(params /*, hash*/) {
		var output = '';
		if (params > 0) {
			return '<span class="inc">' + Math.round(params) + '%</span>';
		}

		return '<span class="dec">' + Math.round(params) + '%</span>';
	}

	exports['default'] = _ember['default'].Helper.helper(deltaDirection);
});
define('diindex-ember-dev/helpers/moment-calendar', ['exports', 'ember', 'diindex-ember-dev/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _diindexEmberDevConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_diindexEmberDevConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('diindex-ember-dev/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('diindex-ember-dev/helpers/moment-format', ['exports', 'ember', 'diindex-ember-dev/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _diindexEmberDevConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_diindexEmberDevConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('diindex-ember-dev/helpers/moment-from-now', ['exports', 'ember', 'diindex-ember-dev/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _diindexEmberDevConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_diindexEmberDevConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('diindex-ember-dev/helpers/moment-to-now', ['exports', 'ember', 'diindex-ember-dev/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _diindexEmberDevConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_diindexEmberDevConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('diindex-ember-dev/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
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
define('diindex-ember-dev/initializers/responsive', ['exports', 'ember-responsive/initializers/responsive'], function (exports, _emberResponsiveInitializersResponsive) {
  exports['default'] = _emberResponsiveInitializersResponsive['default'];
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
define('diindex-ember-dev/initializers/zf-widget', ['exports', 'ember-cli-foundation-6-sass/initializers/zf-widget'], function (exports, _emberCliFoundation6SassInitializersZfWidget) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassInitializersZfWidget['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassInitializersZfWidget.initialize;
    }
  });
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

  Router.map(function () {});

  exports['default'] = Router;
});
/* jshint esversion: 6 */
define('diindex-ember-dev/routes/index', ['exports', 'ember', 'moment', 'lodash/collection', 'diindex-ember-dev/config/environment'], function (exports, _ember, _moment, _lodashCollection, _diindexEmberDevConfigEnvironment) {
	exports['default'] = _ember['default'].Route.extend({
		rigCountNew: null,
		model: function model() {
			var model = this;
			var settings = {
				"async": true,
				"crossDomain": true,
				"dataType": "jsonp",
				"url": _diindexEmberDevConfigEnvironment['default'].APP.connectionPath + 'wp-content/plugins/diindex/api-proxy.php',
				"method": "GET"
			};

			var capacity_settings = {
				"async": settings.async,
				"crossDomain": settings.crossDomain,
				"dataType": settings.dataType,
				"url": settings.url,
				"method": settings.method,
				"data": {
					"url": "http://di-api.drillinginfo.com/v1/diindex/media_production_capacity?$format=json"
				}
			};

			var rig_count_settings = {
				"async": settings.async,
				"crossDomain": settings.crossDomain,
				"dataType": settings.dataType,
				"url": settings.url,
				"method": settings.method,
				"data": {
					"url": "http://di-api.drillinginfo.com/v1/diindex/media_rig_count?$format=json"
				}
			};

			var tc_gas_settings = {
				"async": settings.async,
				"crossDomain": settings.crossDomain,
				"dataType": settings.dataType,
				"url": settings.url,
				"method": settings.method,
				"data": {
					"url": "http://di-api.drillinginfo.com/v1/diindex/media_top_gas_county?$format=json"
				}
			};

			var tc_oil_settings = {
				"async": settings.async,
				"crossDomain": settings.crossDomain,
				"dataType": settings.dataType,
				"url": settings.url,
				"method": settings.method,
				"data": {
					"url": "http://di-api.drillinginfo.com/v1/diindex/media_top_oil_county?$format=json"
				}
			};

			var to_gas_settings = {
				"async": settings.async,
				"crossDomain": settings.crossDomain,
				"dataType": settings.dataType,
				"url": settings.url,
				"method": settings.method,
				"data": {
					"url": "http://di-api.drillinginfo.com/v1/diindex/media_top_gas_operator?$format=json"
				}
			};

			var to_oil_settings = {
				"async": settings.async,
				"crossDomain": settings.crossDomain,
				"dataType": settings.dataType,
				"url": settings.url,
				"method": settings.method,
				"data": {
					"url": "http://di-api.drillinginfo.com/v1/diindex/media_top_oil_operator?$format=json"
				}
			};

			var permit_count_settings = {
				"async": settings.async,
				"crossDomain": settings.crossDomain,
				"dataType": settings.dataType,
				"url": settings.url,
				"method": settings.method,
				"data": {
					"url": "http://di-api.drillinginfo.com/v1/diindex/media_permit_count?$format=json"
				}
			};

			var maps_settings = {
				"async": true,
				"crossDomain": true,
				"dataType": "json",
				"url": _diindexEmberDevConfigEnvironment['default'].APP.connectionPath + "wp-json/wp/v2/pages/",
				"method": "GET",
				"data": {
					"slug": "home-page"
				}
			};

			function diffDate(fromDate, toDate) {

				toDate = toDate || new _moment['default']();

				var diffDate = toDate.diff(fromDate, 'days');
				//console.log('diffDate',diffDate);

				// return no data if it's more than 75 days old.
				return diffDate > 75;
			}

			var data = new _ember['default'].RSVP.hash({

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
					// error out if we get a bad response.
					if (data.status.http_code !== 200) return;

					// use the negative month count index to order data.
					var capacity_data = _lodashCollection['default'].sortBy(data.contents.elements, 'monthnumber'),
					   
					// parse the most recent month
					most_recent = capacity_data[capacity_data.length - 1],
					   
					// data freshness
					runDate = (0, _moment['default'])(most_recent.rundatetime),
					    oldData = diffDate(runDate);

					//console.log('initial capacity data: ',capacity_data);
					//console.log('most_recent:',most_recent);						

					// error out if we are past the 'freshness' date
					if (oldData) return;

					var prodCapData = {
						current: most_recent
					};
					// numeric value formatting
					prodCapData.current.newboeproduction_mboeperday.toLocaleString();
					prodCapData.current.newoilproduction_mbblperday.toLocaleString();
					prodCapData.current.newgasproduction_bcfperday.toLocaleString();

					var highchart_series = [],
					    oil_series = [],
					    gas_series = [],
					   
					// return a max of six months of data
					recent_data = capacity_data.slice(Math.max(capacity_data.length - 6, 0));

					$.each(recent_data, function () {
						highchart_series.push(this.newboeproduction_mboeperday);
						oil_series.push(this.newoilproduction_mbblperday);
						gas_series.push(this.newgasproduction_bcfperday);
					});

					// chart series - total energy production
					var series_mboe = [{
						name: 'MBOE',
						pointStart: (0, _moment['default'])(recent_data[0].rundatetime).valueOf(),
						data: highchart_series,
						dataLabels: {
							align: 'left',
							enabled: true,
							style: {
								fontSize: '.8rem'
							}
						}
					}];
					prodCapData.usProdCapMboeChart = series_mboe;

					// chart series - oil vs gas production
					var series_oil_v_gas = [{
						name: 'Oil',
						pointStart: _moment['default'].utc(recent_data[0].rundatetime).valueOf(),
						data: oil_series,
						yAxis: 0
					}, {
						name: 'Gas',
						pointStart: _moment['default'].utc(recent_data[0].rundatetime).valueOf(),
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

					var rigCountData = {};

					var highchart_series = [];
					// use the negative daily count index to order data.
					var ordered_data = _lodashCollection['default'].sortBy(data.contents.elements, 'date_order');

					// return a max of thirty days of data
					ordered_data = ordered_data.slice(Math.max(highchart_series.length - 30, 0));

					$.each(ordered_data, function () {
						highchart_series.push(this.rig_count);
					});

					rigCountData.series = [{
						name: 'Rig Count',
						pointStart: (0, _moment['default'])(ordered_data[0].rig_date).valueOf(),
						pointInterval: 24 * 3600 * 1000, // one day
						data: highchart_series
					}];
					rigCountData.current = ordered_data[ordered_data.length - 1];
					rigCountData.current.rig_count = rigCountData.current.rig_count.toLocaleString();
					return rigCountData;
				}),

				topCountiesGas: $.ajax(tc_gas_settings).then(function (data) {
					var topten = {
						labels: ['', 'County', 'State', 'Prev.', 'MMCF/Day'],
						data: []
					};

					var topten_data = _lodashCollection['default'].sortBy(data.contents.elements, 'rank');

					$.each(topten_data, function () {
						topten.data.push([this.rank, this.county.slice(0, this.county.length - 4).trim(), this.county.slice(-4).replace(/[()]/g, ''), this.prevrank || '--', this.gasproduction_mmcfperday]);
					});

					return topten;
				}),

				topCountiesOil: $.ajax(tc_oil_settings).then(function (data) {
					var topten = {
						labels: ['', 'County', 'State', 'Prev.', 'MBBL/Day'],
						data: []
					};

					// sort 1-10 by rank
					var topten_data = _lodashCollection['default'].sortBy(data.contents.elements, 'rank');

					$.each(topten_data, function () {
						topten.data.push([this.rank, this.county.slice(0, this.county.length - 4).trim(), this.county.slice(-4).replace(/[()]/g, ''), this.prevrank, this.oilproduction_mbblperday]);
					});

					return topten;
				}),

				topOperatorsGas: $.ajax(to_gas_settings).then(function (data) {
					var topten = {
						labels: ['', 'Operator', 'Prev.', 'MMCF/Day'],
						data: []
					};

					// sort 1-10 by rank
					var topten_data = _lodashCollection['default'].sortBy(data.contents.elements, 'rank');

					$.each(topten_data, function () {
						topten.data.push([this.rank, this.operator, this.prevrank, this.gasproduction_mmcfperday]);
					});

					return topten;
				}),

				topOperatorsOil: $.ajax(to_oil_settings).then(function (data) {
					var topten = {
						labels: ['', 'Operator', 'Prev.', 'MBBL/Day'],
						data: []
					};

					// sort 1-10 by rank
					var topten_data = _lodashCollection['default'].sortBy(data.contents.elements, 'rank');

					$.each(topten_data, function () {
						topten.data.push([this.rank, this.operator, this.prevrank, this.oilproduction_mbblperday]);
					});

					return topten;
				}),

				permitCount: $.ajax(permit_count_settings).then(
				// needs to return tile and chart
				function (data) {
					if (data.status.http_code !== 200) return;

					// use the negative month count index to order data.
					var ordered_data = _lodashCollection['default'].sortBy(data.contents.elements, 'month_order');

					var most_recent = ordered_data[ordered_data.length - 1];

					var runDate = new _moment['default']([most_recent.year, most_recent.month - 1]);
					var oldData = diffDate(runDate);

					if (oldData) return;

					var permitData = {};

					var highchart_series = [];

					// return a max of six months of data
					ordered_data = ordered_data.slice(Math.max(ordered_data.length - 6, 0));
					//console.log(ordered_data);

					$.each(ordered_data, function () {
						highchart_series.push(this.permit_count);
					});

					var series = [{
						name: 'Permit Count',
						pointStart: (0, _moment['default'])([ordered_data[0].year, ordered_data[0].month - 1]).valueOf(),
						data: highchart_series
					}];

					permitData.chart = series;
					permitData.current = most_recent;
					permitData.current.permit_date = [most_recent.year, most_recent.month - 1];
					permitData.current.permit_count = most_recent.permit_count.toLocaleString();
					//console.log(permitData.current);
					return permitData;
				}),

				maps: $.ajax(maps_settings).then(function (data) {
					if (!data.length) return;
					// expecting a single page, since query by slug.
					return data[0];
				})
			});

			console.log(data);

			return data;
		},
		setupController: function setupController(controller, model) {
			var series = undefined,
			    min = undefined;
			controller.set('model', model);
			//console.log(model);

			// lower bounds for rig count
			series = model.rigCount.series[0].data;
			min = _lodashCollection['default'].min(series);
			controller.set('rigCountMin', min);

			// lower bounds for production capacity
			series = model.prodCapacity.usProdCapMboeChart[0].data;
			min = _lodashCollection['default'].min(series);
			controller.set('prodCapMin', min);
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
define('diindex-ember-dev/services/media', ['exports', 'ember-responsive/media'], function (exports, _emberResponsiveMedia) {
  exports['default'] = _emberResponsiveMedia['default'];
});
define('diindex-ember-dev/services/moment', ['exports', 'ember', 'diindex-ember-dev/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _diindexEmberDevConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_diindexEmberDevConfigEnvironment['default'], 'moment.outputFormat')
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
define("diindex-ember-dev/templates/application-loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "diindex-ember-dev/templates/application-loading.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "src", "/wp-content/plugins/diindex/app/dist/vendor/oval.svg");
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
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "diindex-ember-dev/templates/application-loading.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "src", "vendor/oval.svg");
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
            "line": 6,
            "column": 7
          }
        },
        "moduleName": "diindex-ember-dev/templates/application-loading.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Loading...");
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
      statements: [["block", "if", [["get", "isProduction", ["loc", [null, [2, 6], [2, 18]]]]], [], 0, 1, ["loc", [null, [2, 0], [6, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("diindex-ember-dev/templates/application", ["exports"], function (exports) {
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
            "line": 1,
            "column": 10
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
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("diindex-ember-dev/templates/components/data-widget", ["exports"], function (exports) {
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
                "line": 8,
                "column": 4
              },
              "end": {
                "line": 10,
                "column": 4
              }
            },
            "moduleName": "diindex-ember-dev/templates/components/data-widget.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("					");
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
          statements: [["inline", "moment-format", [["get", "dateUpdated", ["loc", [null, [9, 21], [9, 32]]]], ["get", "widgetOptions.dateFormat", ["loc", [null, [9, 33], [9, 57]]]]], [], ["loc", [null, [9, 5], [9, 59]]]]],
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
                "line": 12,
                "column": 3
              },
              "end": {
                "line": 14,
                "column": 3
              }
            },
            "moduleName": "diindex-ember-dev/templates/components/data-widget.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				 (");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(")\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "widgetOptions.interval", ["loc", [null, [13, 11], [13, 37]]]]],
          locals: [],
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
              "column": 3
            },
            "end": {
              "line": 16,
              "column": 3
            }
          },
          "moduleName": "diindex-ember-dev/templates/components/data-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("\n				\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("			\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("			");
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
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["block", "unless", [["get", "dateToBottom", ["loc", [null, [8, 14], [8, 26]]]]], [], 0, null, ["loc", [null, [8, 4], [10, 15]]]], ["block", "if", [["get", "widgetOptions.interval", ["loc", [null, [12, 9], [12, 31]]]]], [], 1, null, ["loc", [null, [12, 3], [14, 10]]]]],
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
              "line": 22,
              "column": 3
            },
            "end": {
              "line": 24,
              "column": 3
            }
          },
          "moduleName": "diindex-ember-dev/templates/components/data-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
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
        statements: [["content", "widgetOptions.units", ["loc", [null, [23, 6], [23, 29]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 35,
                "column": 0
              },
              "end": {
                "line": 39,
                "column": 0
              }
            },
            "moduleName": "diindex-ember-dev/templates/components/data-widget.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "small-12 columns text-center");
            var el2 = dom.createTextNode("\n		");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("(Data from ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(")");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n	");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
            return morphs;
          },
          statements: [["inline", "moment-format", [["get", "dateUpdated", ["loc", [null, [37, 32], [37, 43]]]], ["get", "widgetOptions.dateFormat", ["loc", [null, [37, 44], [37, 68]]]]], [], ["loc", [null, [37, 16], [37, 70]]]]],
          locals: [],
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
              "line": 34,
              "column": 0
            },
            "end": {
              "line": 40,
              "column": 0
            }
          },
          "moduleName": "diindex-ember-dev/templates/components/data-widget.hbs"
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
        statements: [["block", "if", [["get", "dateToBottom", ["loc", [null, [35, 6], [35, 18]]]]], [], 0, null, ["loc", [null, [35, 0], [39, 7]]]]],
        locals: [],
        templates: [child0]
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
            "line": 41,
            "column": 9
          }
        },
        "moduleName": "diindex-ember-dev/templates/components/data-widget.hbs"
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
        dom.setAttribute(el2, "class", "small-5 columns");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "data-header");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "small-2 columns text-center");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "data-header");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "stat");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "small-5 columns text-right");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "data-header");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
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
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1, 1]);
        var element3 = dom.childAt(element1, [3, 1]);
        var element4 = dom.childAt(element1, [5, 1]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(element2, 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element3, [1]), 0, 0);
        morphs[3] = dom.createMorphAt(element3, 3, 3);
        morphs[4] = dom.createUnsafeMorphAt(element4, 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(element4, [3]), 0, 0);
        morphs[6] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[7] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "widgetOptions.title", ["loc", [null, [4, 7], [4, 30]]]], ["block", "if", [["get", "dateUpdated", ["loc", [null, [5, 9], [5, 20]]]]], [], 0, null, ["loc", [null, [5, 3], [16, 10]]]], ["content", "count", ["loc", [null, [21, 21], [21, 30]]]], ["block", "if", [["get", "widgetOptions.units", ["loc", [null, [22, 9], [22, 28]]]]], [], 1, null, ["loc", [null, [22, 3], [24, 10]]]], ["inline", "delta-direction", [["get", "delta", ["loc", [null, [29, 22], [29, 27]]]]], [], ["loc", [null, [29, 3], [29, 30]]]], ["content", "widgetOptions.changeText", ["loc", [null, [30, 6], [30, 34]]]], ["block", "if", [["get", "dateUpdated", ["loc", [null, [34, 6], [34, 17]]]]], [], 2, null, ["loc", [null, [34, 0], [40, 7]]]], ["content", "yield", ["loc", [null, [41, 0], [41, 9]]]]],
      locals: [],
      templates: [child0, child1, child2]
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
                "line": 5,
                "column": 2
              },
              "end": {
                "line": 7,
                "column": 2
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
            var el1 = dom.createTextNode("			");
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
          statements: [["content", "label", ["loc", [null, [6, 7], [6, 16]]]]],
          locals: ["label"],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.5",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 14,
                    "column": 1
                  },
                  "end": {
                    "line": 16,
                    "column": 1
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
              statements: [["content", "el", ["loc", [null, [15, 5], [15, 11]]]]],
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
                    "line": 16,
                    "column": 1
                  },
                  "end": {
                    "line": 18,
                    "column": 1
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
                var el1 = dom.createTextNode("	");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("td");
                var el2 = dom.createTextNode("--");
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
              "fragmentReason": false,
              "revision": "Ember@2.4.5",
              "loc": {
                "source": null,
                "start": {
                  "line": 13,
                  "column": 1
                },
                "end": {
                  "line": 19,
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
            statements: [["block", "if", [["get", "el", ["loc", [null, [14, 7], [14, 9]]]]], [], 0, 1, ["loc", [null, [14, 1], [18, 8]]]]],
            locals: ["el"],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 0
              },
              "end": {
                "line": 21,
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
          statements: [["block", "each", [["get", "item", ["loc", [null, [13, 9], [13, 13]]]]], [], 0, null, ["loc", [null, [13, 1], [19, 10]]]]],
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
              "line": 24,
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
          var el2 = dom.createElement("thead");
          var el3 = dom.createTextNode("\n		");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tr");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("		");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n	");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tbody");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
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
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "obj.labels", ["loc", [null, [5, 10], [5, 20]]]]], [], 0, null, ["loc", [null, [5, 2], [7, 11]]]], ["block", "each", [["get", "obj.data", ["loc", [null, [11, 8], [11, 16]]]]], [], 1, null, ["loc", [null, [11, 0], [21, 9]]]]],
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
              "line": 24,
              "column": 0
            },
            "end": {
              "line": 26,
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
            "line": 26,
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
      statements: [["block", "if", [["get", "obj.data", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [26, 7]]]]],
      locals: [],
      templates: [child0, child1]
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
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 17,
              "column": 4
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
          var el1 = dom.createTextNode("				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("header");
          var el2 = dom.createTextNode("\n					");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n				\n				");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "data-widget", [], ["widgetOptions", ["subexpr", "@mut", [["get", "rigCount.widgetOptions", ["loc", [null, [8, 22], [8, 44]]]]], [], []], "count", ["subexpr", "@mut", [["get", "model.rigCount.current.rig_count", ["loc", [null, [9, 14], [9, 46]]]]], [], []], "delta", ["subexpr", "@mut", [["get", "model.rigCount.current.pct_change", ["loc", [null, [10, 14], [10, 47]]]]], [], []], "dateUpdated", ["subexpr", "@mut", [["get", "model.rigCount.current.rig_date", ["loc", [null, [11, 20], [11, 51]]]]], [], []]], ["loc", [null, [7, 5], [12, 7]]]], ["inline", "high-charts", [], ["content", ["subexpr", "@mut", [["get", "model.rigCount.series", ["loc", [null, [15, 26], [15, 47]]]]], [], []], "chartOptions", ["subexpr", "@mut", [["get", "rigCount.chartOptions", ["loc", [null, [15, 61], [15, 82]]]]], [], []], "theme", ["subexpr", "@mut", [["get", "theme", ["loc", [null, [15, 89], [15, 94]]]]], [], []]], ["loc", [null, [15, 4], [15, 96]]]]],
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
              "line": 17,
              "column": 4
            },
            "end": {
              "line": 19,
              "column": 4
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
          var el1 = dom.createTextNode("				");
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
              "line": 24,
              "column": 4
            },
            "end": {
              "line": 36,
              "column": 4
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
          var el1 = dom.createTextNode("				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("header");
          var el2 = dom.createTextNode("\n					");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n				\n				");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "data-widget", [], ["widgetOptions", ["subexpr", "@mut", [["get", "permitCount.widgetOptions", ["loc", [null, [27, 22], [27, 47]]]]], [], []], "count", ["subexpr", "@mut", [["get", "model.permitCount.current.permit_count", ["loc", [null, [28, 14], [28, 52]]]]], [], []], "delta", ["subexpr", "@mut", [["get", "model.permitCount.current.pct_change", ["loc", [null, [29, 14], [29, 50]]]]], [], []], "dateUpdated", ["subexpr", "@mut", [["get", "model.permitCount.current.permit_date", ["loc", [null, [30, 20], [30, 57]]]]], [], []]], ["loc", [null, [26, 5], [31, 7]]]], ["inline", "high-charts", [], ["content", ["subexpr", "@mut", [["get", "model.permitCount.chart", ["loc", [null, [34, 26], [34, 49]]]]], [], []], "chartOptions", ["subexpr", "@mut", [["get", "permitCount.chartOptions", ["loc", [null, [34, 63], [34, 87]]]]], [], []], "theme", ["subexpr", "@mut", [["get", "theme", ["loc", [null, [34, 94], [34, 99]]]]], [], []]], ["loc", [null, [34, 4], [34, 101]]]]],
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
              "line": 36,
              "column": 4
            },
            "end": {
              "line": 38,
              "column": 4
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
          var el1 = dom.createTextNode("				");
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
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.5",
              "loc": {
                "source": null,
                "start": {
                  "line": 52,
                  "column": 4
                },
                "end": {
                  "line": 85,
                  "column": 4
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
              var el1 = dom.createTextNode("				");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "row");
              var el2 = dom.createTextNode("\n				");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "large-6 columns");
              var el3 = dom.createTextNode("\n					");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("section");
              dom.setAttribute(el3, "class", "pc-overview");
              var el4 = dom.createTextNode("\n						");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("header");
              dom.setAttribute(el4, "class", "pc-widget");
              var el5 = dom.createTextNode("\n							");
              dom.appendChild(el4, el5);
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode("\n						");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n						");
              dom.appendChild(el3, el4);
              var el4 = dom.createComment("");
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n					");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n				");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n				");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("section");
              dom.setAttribute(el2, "class", "large-6 columns oilvgas");
              var el3 = dom.createTextNode("\n						");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "pc-widget");
              var el4 = dom.createTextNode("\n						");
              dom.appendChild(el3, el4);
              var el4 = dom.createComment("");
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n						");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n						");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "pc-widget");
              var el4 = dom.createTextNode("\n						");
              dom.appendChild(el3, el4);
              var el4 = dom.createComment("");
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n						");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n					");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n				");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n				");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element19 = dom.childAt(fragment, [1]);
              var element20 = dom.childAt(element19, [1, 1]);
              var element21 = dom.childAt(element19, [3]);
              var morphs = new Array(5);
              morphs[0] = dom.createMorphAt(dom.childAt(element20, [1]), 1, 1);
              morphs[1] = dom.createMorphAt(element20, 3, 3);
              morphs[2] = dom.createMorphAt(dom.childAt(element21, [1]), 1, 1);
              morphs[3] = dom.createMorphAt(dom.childAt(element21, [3]), 1, 1);
              morphs[4] = dom.createMorphAt(element21, 5, 5);
              return morphs;
            },
            statements: [["inline", "data-widget", [], ["widgetOptions", ["subexpr", "@mut", [["get", "prodCap.widgetOptions", ["loc", [null, [58, 24], [58, 45]]]]], [], []], "count", ["subexpr", "@mut", [["get", "model.prodCapacity.current.newboeproduction_mboeperday", ["loc", [null, [59, 16], [59, 70]]]]], [], []], "delta", ["subexpr", "@mut", [["get", "model.prodCapacity.current.pctchgboe", ["loc", [null, [60, 16], [60, 52]]]]], [], []], "dateUpdated", ["subexpr", "@mut", [["get", "model.prodCapacity.current.rundatetime", ["loc", [null, [61, 22], [61, 60]]]]], [], []]], ["loc", [null, [57, 7], [62, 9]]]], ["inline", "high-charts", [], ["content", ["subexpr", "@mut", [["get", "model.prodCapacity.usProdCapMboeChart", ["loc", [null, [64, 28], [64, 65]]]]], [], []], "chartOptions", ["subexpr", "@mut", [["get", "prodCap.chartOptions", ["loc", [null, [64, 80], [64, 100]]]]], [], []], "theme", ["subexpr", "@mut", [["get", "theme", ["loc", [null, [64, 107], [64, 112]]]]], [], []]], ["loc", [null, [64, 6], [64, 114]]]], ["inline", "data-widget", [], ["widgetOptions", ["subexpr", "@mut", [["get", "oilWidgetOptions", ["loc", [null, [70, 23], [70, 39]]]]], [], []], "count", ["subexpr", "@mut", [["get", "model.prodCapacity.current.newoilproduction_mbblperday", ["loc", [null, [71, 15], [71, 69]]]]], [], []], "delta", ["subexpr", "@mut", [["get", "model.prodCapacity.current.pctchgoil", ["loc", [null, [72, 15], [72, 51]]]]], [], []]], ["loc", [null, [69, 6], [73, 8]]]], ["inline", "data-widget", [], ["widgetOptions", ["subexpr", "@mut", [["get", "gasWidgetOptions", ["loc", [null, [77, 23], [77, 39]]]]], [], []], "count", ["subexpr", "@mut", [["get", "model.prodCapacity.current.newgasproduction_bcfperday", ["loc", [null, [78, 15], [78, 68]]]]], [], []], "delta", ["subexpr", "@mut", [["get", "model.prodCapacity.current.pctchggas", ["loc", [null, [79, 15], [79, 51]]]]], [], []]], ["loc", [null, [76, 6], [80, 8]]]], ["inline", "high-charts", [], ["content", ["subexpr", "@mut", [["get", "model.prodCapacity.prodOilVsGas", ["loc", [null, [82, 27], [82, 58]]]]], [], []], "chartOptions", ["subexpr", "@mut", [["get", "prodCapByType.chartOptions", ["loc", [null, [82, 72], [82, 98]]]]], [], []], "theme", ["subexpr", "@mut", [["get", "theme", ["loc", [null, [82, 105], [82, 110]]]]], [], []]], ["loc", [null, [82, 5], [82, 112]]]]],
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
                  "line": 85,
                  "column": 4
                },
                "end": {
                  "line": 87,
                  "column": 4
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
              var el1 = dom.createTextNode("				");
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
        var child2 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.5",
              "loc": {
                "source": null,
                "start": {
                  "line": 99,
                  "column": 4
                },
                "end": {
                  "line": 114,
                  "column": 4
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
              var el1 = dom.createTextNode("				");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "large-6 columns");
              var el2 = dom.createTextNode("\n					");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h3");
              var el3 = dom.createTextNode("New Production by ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("strong");
              var el4 = dom.createTextNode("Operators");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n					");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h4");
              var el3 = dom.createTextNode("Gas");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n					");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n					");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h4");
              var el3 = dom.createTextNode("Oil");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n					");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n				");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n				");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "large-6 columns");
              var el2 = dom.createTextNode("\n					");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h3");
              var el3 = dom.createTextNode("New Production by ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("strong");
              var el4 = dom.createTextNode("Counties");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n					");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h4");
              var el3 = dom.createTextNode("Gas");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n					");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n					");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h4");
              var el3 = dom.createTextNode("Oil");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n					");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n				");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element17 = dom.childAt(fragment, [1]);
              var element18 = dom.childAt(fragment, [3]);
              var morphs = new Array(4);
              morphs[0] = dom.createMorphAt(element17, 5, 5);
              morphs[1] = dom.createMorphAt(element17, 9, 9);
              morphs[2] = dom.createMorphAt(element18, 5, 5);
              morphs[3] = dom.createMorphAt(element18, 9, 9);
              return morphs;
            },
            statements: [["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topOperatorsGas", ["loc", [null, [103, 19], [103, 40]]]]], [], []]], ["loc", [null, [103, 5], [103, 42]]]], ["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topOperatorsOil", ["loc", [null, [105, 19], [105, 40]]]]], [], []]], ["loc", [null, [105, 5], [105, 42]]]], ["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topCountiesGas", ["loc", [null, [110, 19], [110, 39]]]]], [], []]], ["loc", [null, [110, 5], [110, 41]]]], ["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topCountiesOil", ["loc", [null, [112, 19], [112, 39]]]]], [], []]], ["loc", [null, [112, 5], [112, 41]]]]],
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
                  "line": 114,
                  "column": 4
                },
                "end": {
                  "line": 116,
                  "column": 4
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
              var el1 = dom.createTextNode("				");
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
        var child4 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.5",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 131,
                    "column": 5
                  },
                  "end": {
                    "line": 133,
                    "column": 5
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
                var el1 = dom.createTextNode("						");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("a");
                dom.setAttribute(el1, "target", "_blank");
                var el2 = dom.createElement("img");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element15 = dom.childAt(fragment, [1]);
                var element16 = dom.childAt(element15, [0]);
                var morphs = new Array(3);
                morphs[0] = dom.createAttrMorph(element15, 'href');
                morphs[1] = dom.createAttrMorph(element16, 'src');
                morphs[2] = dom.createAttrMorph(element16, 'alt');
                return morphs;
              },
              statements: [["attribute", "href", ["concat", [["get", "model.maps.acf.wells_expanded_version", ["loc", [null, [132, 17], [132, 54]]]]]]], ["attribute", "src", ["concat", [["get", "model.maps.acf.wells_map_image.url", ["loc", [null, [132, 86], [132, 120]]]]]]], ["attribute", "alt", ["concat", [["get", "model.maps.acf.wells_map_image.title", ["loc", [null, [132, 131], [132, 167]]]]]]]],
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
                    "line": 133,
                    "column": 5
                  },
                  "end": {
                    "line": 135,
                    "column": 5
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
                var el1 = dom.createTextNode("						");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("img");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element14 = dom.childAt(fragment, [1]);
                var morphs = new Array(2);
                morphs[0] = dom.createAttrMorph(element14, 'src');
                morphs[1] = dom.createAttrMorph(element14, 'alt');
                return morphs;
              },
              statements: [["attribute", "src", ["concat", [["get", "model.maps.acf.wells_map_image.url", ["loc", [null, [134, 18], [134, 52]]]]]]], ["attribute", "alt", ["concat", [["get", "model.maps.acf.wells_map_image.title", ["loc", [null, [134, 63], [134, 99]]]]]]]],
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
                    "line": 139,
                    "column": 5
                  },
                  "end": {
                    "line": 141,
                    "column": 5
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
                var el1 = dom.createTextNode("						");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("a");
                dom.setAttribute(el1, "target", "_blank");
                var el2 = dom.createElement("img");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element12 = dom.childAt(fragment, [1]);
                var element13 = dom.childAt(element12, [0]);
                var morphs = new Array(3);
                morphs[0] = dom.createAttrMorph(element12, 'href');
                morphs[1] = dom.createAttrMorph(element13, 'src');
                morphs[2] = dom.createAttrMorph(element13, 'alt');
                return morphs;
              },
              statements: [["attribute", "href", ["concat", [["get", "model.maps.acf.rig_expanded_version", ["loc", [null, [140, 17], [140, 52]]]]]]], ["attribute", "src", ["concat", [["get", "model.maps.acf.rig_map_image.url", ["loc", [null, [140, 84], [140, 116]]]]]]], ["attribute", "alt", ["concat", [["get", "model.maps.acf.rig_map_image.title", ["loc", [null, [140, 127], [140, 161]]]]]]]],
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
                    "line": 141,
                    "column": 5
                  },
                  "end": {
                    "line": 143,
                    "column": 5
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
                var el1 = dom.createTextNode("						");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("img");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element11 = dom.childAt(fragment, [1]);
                var morphs = new Array(2);
                morphs[0] = dom.createAttrMorph(element11, 'src');
                morphs[1] = dom.createAttrMorph(element11, 'alt');
                return morphs;
              },
              statements: [["attribute", "src", ["concat", [["get", "model.maps.acf.rig_map_image.url", ["loc", [null, [142, 18], [142, 50]]]]]]], ["attribute", "alt", ["concat", [["get", "model.maps.acf.rig_map_image.title", ["loc", [null, [142, 61], [142, 95]]]]]]]],
              locals: [],
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
                  "line": 128,
                  "column": 4
                },
                "end": {
                  "line": 145,
                  "column": 4
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
              var el1 = dom.createTextNode("				");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "large-6 columns");
              var el2 = dom.createTextNode("\n					");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h3");
              var el3 = dom.createTextNode("New Wells");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("				");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n				");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "large-6 columns");
              var el2 = dom.createTextNode("\n					");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h3");
              var el3 = dom.createTextNode("Rig Movement");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("				");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
              morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 3, 3);
              return morphs;
            },
            statements: [["block", "if", [["get", "model.maps.acf.wells_expanded_version", ["loc", [null, [131, 11], [131, 48]]]]], [], 0, 1, ["loc", [null, [131, 5], [135, 12]]]], ["block", "if", [["get", "model.maps.acf.rig_expanded_version", ["loc", [null, [139, 11], [139, 46]]]]], [], 2, 3, ["loc", [null, [139, 5], [143, 12]]]]],
            locals: [],
            templates: [child0, child1, child2, child3]
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
                  "line": 145,
                  "column": 4
                },
                "end": {
                  "line": 147,
                  "column": 4
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
              var el1 = dom.createTextNode("				");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createTextNode("Map data is not available at this time.");
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
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 44,
                "column": 0
              },
              "end": {
                "line": 152,
                "column": 0
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
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "accordion-item is-active");
            dom.setAttribute(el1, "data-accordion-item", "");
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "class", "accordion-title");
            var el3 = dom.createTextNode("Production Capacity");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "accordion-content");
            dom.setAttribute(el2, "data-tab-content", "");
            var el3 = dom.createTextNode("\n      	");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment(" First Tab - Production Capacity ");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n		");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "row");
            var el4 = dom.createTextNode("\n			");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "large-12 columns panel");
            var el5 = dom.createTextNode("\n				");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("h2");
            dom.setAttribute(el5, "class", "show-for-sr");
            var el6 = dom.createTextNode("Production Capacity");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("			");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n		");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createComment(" / .row ");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n    ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createComment(" / .accordion-content ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n  ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "accordion-item");
            dom.setAttribute(el1, "data-accordion-item", "");
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "class", "accordion-title");
            var el3 = dom.createTextNode("Top 10");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "accordion-content");
            dom.setAttribute(el2, "data-tab-content", "");
            var el3 = dom.createTextNode("\n    	");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment(" Second Tab - Top Ten Lists ");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n		");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "row");
            var el4 = dom.createTextNode("\n			");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "large-12 columns panel");
            var el5 = dom.createTextNode("\n				");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("h2");
            var el6 = dom.createTextNode("Top Ten");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("			");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n		");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createComment(" / .row ");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n    ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n  ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "accordion-item");
            dom.setAttribute(el1, "data-accordion-item", "");
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "class", "accordion-title");
            var el3 = dom.createTextNode("Maps");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "accordion-content");
            dom.setAttribute(el2, "data-tab-content", "");
            var el3 = dom.createTextNode("\n    	");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment(" Third Tab - Maps ");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n		");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "row");
            var el4 = dom.createTextNode("\n			");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "large-12 columns panel");
            var el5 = dom.createTextNode("\n				");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("h2");
            var el6 = dom.createTextNode("Maps");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("			");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n		");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n    ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n  ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3, 3, 1]), 3, 3);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3, 3, 3, 1]), 3, 3);
            morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5, 3, 3, 1]), 3, 3);
            return morphs;
          },
          statements: [["block", "if", [["get", "model.prodCapacity", ["loc", [null, [52, 10], [52, 28]]]]], [], 0, 1, ["loc", [null, [52, 4], [87, 11]]]], ["block", "if", [["get", "model.topCountiesGas", ["loc", [null, [99, 10], [99, 30]]]]], [], 2, 3, ["loc", [null, [99, 4], [116, 11]]]], ["block", "if", [["get", "model.maps", ["loc", [null, [128, 10], [128, 20]]]]], [], 4, 5, ["loc", [null, [128, 4], [147, 11]]]]],
          locals: [],
          templates: [child0, child1, child2, child3, child4, child5]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 43,
              "column": 0
            },
            "end": {
              "line": 153,
              "column": 0
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
        statements: [["block", "zf-accordion", [], [], 0, null, ["loc", [null, [44, 0], [152, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child5 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 154,
                "column": 0
              },
              "end": {
                "line": 158,
                "column": 0
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
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "tabs-title is-active");
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "href", "#panel1");
            dom.setAttribute(el2, "aria-selected", "true");
            var el3 = dom.createTextNode("Production Capacity");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "tabs-title");
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "href", "#panel2");
            var el3 = dom.createTextNode("Top 10");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "tabs-title");
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "href", "#panel3");
            var el3 = dom.createTextNode("Maps");
            dom.appendChild(el2, el3);
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
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 165,
                "column": 4
              },
              "end": {
                "line": 198,
                "column": 4
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
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "large-6 columns");
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("section");
            dom.setAttribute(el2, "class", "pc-overview");
            var el3 = dom.createTextNode("\n						");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("header");
            dom.setAttribute(el3, "class", "pc-widget");
            var el4 = dom.createTextNode("\n\n							");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n\n						");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n						");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("section");
            dom.setAttribute(el1, "class", "large-6 columns");
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "pc-widget");
            var el3 = dom.createTextNode("\n						");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n						");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "pc-widget");
            var el3 = dom.createTextNode("\n						");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n						");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element8 = dom.childAt(fragment, [1, 1]);
            var element9 = dom.childAt(fragment, [3]);
            var morphs = new Array(5);
            morphs[0] = dom.createMorphAt(dom.childAt(element8, [1]), 1, 1);
            morphs[1] = dom.createMorphAt(element8, 3, 3);
            morphs[2] = dom.createMorphAt(dom.childAt(element9, [1]), 1, 1);
            morphs[3] = dom.createMorphAt(dom.childAt(element9, [3]), 1, 1);
            morphs[4] = dom.createMorphAt(element9, 5, 5);
            return morphs;
          },
          statements: [["inline", "data-widget", [], ["widgetOptions", ["subexpr", "@mut", [["get", "prodCap.widgetOptions", ["loc", [null, [171, 24], [171, 45]]]]], [], []], "count", ["subexpr", "@mut", [["get", "model.prodCapacity.current.newboeproduction_mboeperday", ["loc", [null, [172, 16], [172, 70]]]]], [], []], "delta", ["subexpr", "@mut", [["get", "model.prodCapacity.current.pctchgboe", ["loc", [null, [173, 16], [173, 52]]]]], [], []], "dateUpdated", ["subexpr", "@mut", [["get", "model.prodCapacity.current.rundatetime", ["loc", [null, [174, 22], [174, 60]]]]], [], []]], ["loc", [null, [170, 7], [175, 9]]]], ["inline", "high-charts", [], ["content", ["subexpr", "@mut", [["get", "model.prodCapacity.usProdCapMboeChart", ["loc", [null, [178, 28], [178, 65]]]]], [], []], "chartOptions", ["subexpr", "@mut", [["get", "prodCap.chartOptions", ["loc", [null, [178, 80], [178, 100]]]]], [], []], "theme", ["subexpr", "@mut", [["get", "theme", ["loc", [null, [178, 107], [178, 112]]]]], [], []]], ["loc", [null, [178, 6], [178, 114]]]], ["inline", "data-widget", [], ["widgetOptions", ["subexpr", "@mut", [["get", "oilWidgetOptions", ["loc", [null, [184, 23], [184, 39]]]]], [], []], "count", ["subexpr", "@mut", [["get", "model.prodCapacity.current.newoilproduction_mbblperday", ["loc", [null, [185, 15], [185, 69]]]]], [], []], "delta", ["subexpr", "@mut", [["get", "model.prodCapacity.current.pctchgoil", ["loc", [null, [186, 15], [186, 51]]]]], [], []]], ["loc", [null, [183, 6], [187, 8]]]], ["inline", "data-widget", [], ["widgetOptions", ["subexpr", "@mut", [["get", "gasWidgetOptions", ["loc", [null, [191, 23], [191, 39]]]]], [], []], "count", ["subexpr", "@mut", [["get", "model.prodCapacity.current.newgasproduction_bcfperday", ["loc", [null, [192, 15], [192, 68]]]]], [], []], "delta", ["subexpr", "@mut", [["get", "model.prodCapacity.current.pctchggas", ["loc", [null, [193, 15], [193, 51]]]]], [], []]], ["loc", [null, [190, 6], [194, 8]]]], ["inline", "high-charts", [], ["content", ["subexpr", "@mut", [["get", "model.prodCapacity.prodOilVsGas", ["loc", [null, [196, 27], [196, 58]]]]], [], []], "chartOptions", ["subexpr", "@mut", [["get", "prodCapByType.chartOptions", ["loc", [null, [196, 72], [196, 98]]]]], [], []], "theme", ["subexpr", "@mut", [["get", "theme", ["loc", [null, [196, 105], [196, 110]]]]], [], []]], ["loc", [null, [196, 5], [196, 112]]]]],
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
                "line": 198,
                "column": 4
              },
              "end": {
                "line": 200,
                "column": 4
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
            var el1 = dom.createTextNode("				");
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
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 215,
                "column": 4
              },
              "end": {
                "line": 230,
                "column": 4
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
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "large-6 columns");
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createTextNode("New Production by ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Operators");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h4");
            var el3 = dom.createTextNode("Gas");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h4");
            var el3 = dom.createTextNode("Oil");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "large-6 columns");
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createTextNode("New Production by ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("strong");
            var el4 = dom.createTextNode("Counties");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h4");
            var el3 = dom.createTextNode("Gas");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h4");
            var el3 = dom.createTextNode("Oil");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element6 = dom.childAt(fragment, [1]);
            var element7 = dom.childAt(fragment, [3]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(element6, 5, 5);
            morphs[1] = dom.createMorphAt(element6, 9, 9);
            morphs[2] = dom.createMorphAt(element7, 5, 5);
            morphs[3] = dom.createMorphAt(element7, 9, 9);
            return morphs;
          },
          statements: [["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topOperatorsGas", ["loc", [null, [219, 19], [219, 40]]]]], [], []]], ["loc", [null, [219, 5], [219, 42]]]], ["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topOperatorsOil", ["loc", [null, [221, 19], [221, 40]]]]], [], []]], ["loc", [null, [221, 5], [221, 42]]]], ["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topCountiesGas", ["loc", [null, [226, 19], [226, 39]]]]], [], []]], ["loc", [null, [226, 5], [226, 41]]]], ["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topCountiesOil", ["loc", [null, [228, 19], [228, 39]]]]], [], []]], ["loc", [null, [228, 5], [228, 41]]]]],
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
                "line": 230,
                "column": 4
              },
              "end": {
                "line": 232,
                "column": 4
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
            var el1 = dom.createTextNode("				");
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
      var child5 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.5",
              "loc": {
                "source": null,
                "start": {
                  "line": 244,
                  "column": 5
                },
                "end": {
                  "line": 246,
                  "column": 5
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
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("a");
              dom.setAttribute(el1, "target", "_blank");
              var el2 = dom.createElement("img");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element4 = dom.childAt(fragment, [1]);
              var element5 = dom.childAt(element4, [0]);
              var morphs = new Array(3);
              morphs[0] = dom.createAttrMorph(element4, 'href');
              morphs[1] = dom.createAttrMorph(element5, 'src');
              morphs[2] = dom.createAttrMorph(element5, 'alt');
              return morphs;
            },
            statements: [["attribute", "href", ["concat", [["get", "model.maps.acf.wells_expanded_version", ["loc", [null, [245, 17], [245, 54]]]]]]], ["attribute", "src", ["concat", [["get", "model.maps.acf.wells_map_image.url", ["loc", [null, [245, 86], [245, 120]]]]]]], ["attribute", "alt", ["concat", [["get", "model.maps.acf.wells_map_image.title", ["loc", [null, [245, 131], [245, 167]]]]]]]],
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
                  "line": 246,
                  "column": 5
                },
                "end": {
                  "line": 248,
                  "column": 5
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
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("img");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element3 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element3, 'src');
              morphs[1] = dom.createAttrMorph(element3, 'alt');
              return morphs;
            },
            statements: [["attribute", "src", ["concat", [["get", "model.maps.acf.wells_map_image.url", ["loc", [null, [247, 18], [247, 52]]]]]]], ["attribute", "alt", ["concat", [["get", "model.maps.acf.wells_map_image.title", ["loc", [null, [247, 63], [247, 99]]]]]]]],
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
                  "line": 252,
                  "column": 5
                },
                "end": {
                  "line": 254,
                  "column": 5
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
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("a");
              dom.setAttribute(el1, "target", "_blank");
              var el2 = dom.createElement("img");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element1 = dom.childAt(fragment, [1]);
              var element2 = dom.childAt(element1, [0]);
              var morphs = new Array(3);
              morphs[0] = dom.createAttrMorph(element1, 'href');
              morphs[1] = dom.createAttrMorph(element2, 'src');
              morphs[2] = dom.createAttrMorph(element2, 'alt');
              return morphs;
            },
            statements: [["attribute", "href", ["concat", [["get", "model.maps.acf.rig_expanded_version", ["loc", [null, [253, 17], [253, 52]]]]]]], ["attribute", "src", ["concat", [["get", "model.maps.acf.rig_map_image.url", ["loc", [null, [253, 84], [253, 116]]]]]]], ["attribute", "alt", ["concat", [["get", "model.maps.acf.rig_map_image.title", ["loc", [null, [253, 127], [253, 161]]]]]]]],
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
                  "line": 254,
                  "column": 5
                },
                "end": {
                  "line": 256,
                  "column": 5
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
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("img");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element0, 'src');
              morphs[1] = dom.createAttrMorph(element0, 'alt');
              return morphs;
            },
            statements: [["attribute", "src", ["concat", [["get", "model.maps.acf.rig_map_image.url", ["loc", [null, [255, 18], [255, 50]]]]]]], ["attribute", "alt", ["concat", [["get", "model.maps.acf.rig_map_image.title", ["loc", [null, [255, 61], [255, 95]]]]]]]],
            locals: [],
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
                "line": 241,
                "column": 4
              },
              "end": {
                "line": 258,
                "column": 4
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
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "large-6 columns");
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createTextNode("New Wells");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "large-6 columns");
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createTextNode("Rig Movement");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 3, 3);
            return morphs;
          },
          statements: [["block", "if", [["get", "model.maps.acf.wells_expanded_version", ["loc", [null, [244, 11], [244, 48]]]]], [], 0, 1, ["loc", [null, [244, 5], [248, 12]]]], ["block", "if", [["get", "model.maps.acf.rig_expanded_version", ["loc", [null, [252, 11], [252, 46]]]]], [], 2, 3, ["loc", [null, [252, 5], [256, 12]]]]],
          locals: [],
          templates: [child0, child1, child2, child3]
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
                "line": 258,
                "column": 4
              },
              "end": {
                "line": 260,
                "column": 4
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
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createTextNode("Map data is not available at this time.");
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
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 153,
              "column": 0
            },
            "end": {
              "line": 265,
              "column": 0
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
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "tabs-content");
          dom.setAttribute(el1, "data-tabs-content", "example-tabs");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "tabs-panel is-active");
          dom.setAttribute(el2, "id", "panel1");
          var el3 = dom.createTextNode("\n    	");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" First Tab - Production Capacity ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n		");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "row");
          var el4 = dom.createTextNode("\n			");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "large-12 columns panel");
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("h2");
          dom.setAttribute(el5, "class", "show-for-sr");
          var el6 = dom.createTextNode("Production Capacity");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("			");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n		");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" / .row ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "tabs-panel");
          dom.setAttribute(el2, "id", "panel2");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" Second Tab - Top Ten Lists ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n		");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "row");
          var el4 = dom.createTextNode("\n			");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "large-12 columns panel");
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("h2");
          var el6 = dom.createTextNode("Top Ten");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "switch tiny");
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("input");
          dom.setAttribute(el6, "class", "switch-input");
          dom.setAttribute(el6, "id", "tinySwitch");
          dom.setAttribute(el6, "type", "checkbox");
          dom.setAttribute(el6, "name", "exampleSwitch");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          dom.setAttribute(el6, "class", "switch-paddle");
          dom.setAttribute(el6, "for", "tinySwitch");
          var el7 = dom.createTextNode("\n					");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("span");
          dom.setAttribute(el7, "class", "show-for-sr");
          var el8 = dom.createTextNode("Tiny Sandwiches Enabled");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n					");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n				");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("			");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n		");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" / .row ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "tabs-panel");
          dom.setAttribute(el2, "id", "panel3");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" Third Tab - Maps ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n		");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "row");
          var el4 = dom.createTextNode("\n			");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "large-12 columns panel");
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("h2");
          var el6 = dom.createTextNode("Maps");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("			");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n		");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
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
          var element10 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(element10, [1, 3, 1]), 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(element10, [3, 3, 1]), 5, 5);
          morphs[3] = dom.createMorphAt(dom.childAt(element10, [5, 3, 1]), 3, 3);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "zf-tabs", [], [], 0, null, ["loc", [null, [154, 0], [158, 12]]]], ["block", "if", [["get", "model.prodCapacity", ["loc", [null, [165, 10], [165, 28]]]]], [], 1, 2, ["loc", [null, [165, 4], [200, 11]]]], ["block", "if", [["get", "model.topCountiesGas", ["loc", [null, [215, 10], [215, 30]]]]], [], 3, 4, ["loc", [null, [215, 4], [232, 11]]]], ["block", "if", [["get", "model.maps", ["loc", [null, [241, 10], [241, 20]]]]], [], 5, 6, ["loc", [null, [241, 4], [260, 11]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5, child6]
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
            "line": 265,
            "column": 7
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
        dom.setAttribute(el1, "class", "counts-row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "large-6 columns");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("section");
        dom.setAttribute(el4, "class", "di-module");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
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
        var el4 = dom.createElement("section");
        dom.setAttribute(el4, "class", "di-module");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" / .row ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" /.counts-row ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element22 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element22, [1, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element22, [3, 1]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.rigCount", ["loc", [null, [5, 10], [5, 24]]]]], [], 0, 1, ["loc", [null, [5, 4], [19, 11]]]], ["block", "if", [["get", "model.permitCount.chart", ["loc", [null, [24, 10], [24, 33]]]]], [], 2, 3, ["loc", [null, [24, 4], [38, 11]]]], ["block", "if", [["get", "media.isMedium", ["loc", [null, [43, 6], [43, 20]]]]], [], 4, 5, ["loc", [null, [43, 0], [265, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
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
		href: 'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300',
		rel: 'stylesheet',
		type: 'text/css'
	}, null, document.getElementsByTagName('head')[0]);

	exports['default'] = Highcharts.extend({
		colors: ["#78be20", "#1d54a0", "#585b5d"],
		chart: {
			backgroundColor: '#fff',
			//height: 215,
			style: {
				fontFamily: '"Open Sans Condensed", sans-serif;',
				color: '#333'
			},
			plotBorderColor: 'transparent'
			//height: 300
		},
		title: {
			text: '',
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
			gridLineColor: 'transparent',
			gridLineWidth: 1,
			labels: {
				style: {
					color: '#333',
					fontWeight: 'bold',
					fontSize: '.625rem'
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
					color: '#333',
					fontStyle: 'italic',
					fontSize: '0.625rem'
				},
				margin: 30
			}
		},
		yAxis: {
			visible: true,
			gridLineColor: 'transparent',
			gridLineWidth: 1,
			labels: {
				style: {
					"color": '#333',
					"fontWeight": 'bold'
				}
			},
			lineColor: '#333',
			lineWidth: 1,
			minorGridLineColor: '#000',
			minorGridLineWidth: 1,
			minorTickLength: 0,
			tickLength: 0,
			tickWidth: 0,
			title: {
				text: '',
				style: {
					color: '#333',
					fontStyle: 'italic',
					fontSize: '0.625rem'
				}
			}
		},
		tooltip: {
			//pointFormat: '{series.name}: <b>{point.y}</b><br/>',
			backgroundColor: '#585b5d',
			borderColor: '#fff',
			style: {
				color: '#FFF',
				fontSize: '15px',
				padding: '8px',
				border: '1px solid red'
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
				lineWidth: 0,
				marker: {
					lineWidth: 0,
					symbol: 'circle',
					radius: 4
				}
			}
		},
		legend: {
			itemStyle: {
				color: '#fff'
			},
			itemHoverStyle: {
				color: '#76c000'
			},
			itemHiddenStyle: {
				color: '#9b9d9e'
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
  return { 'default': {"modulePrefix":"diindex-ember-dev","environment":"development","baseURL":"/","locationType":"none","EmberENV":{"FEATURES":{}},"APP":{"rootElement":"#diindex-dashboard","connectionPath":"http://local.diindex.nfusion.com/","name":"diindex-ember-dev","version":"0.0.0+6483f95f"},"exportApplicationGlobal":true}};
});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("diindex-ember-dev/app")["default"].create({"rootElement":"#diindex-dashboard","connectionPath":"http://local.diindex.nfusion.com/","name":"diindex-ember-dev","version":"0.0.0+6483f95f"});
}

/* jshint ignore:end */
//# sourceMappingURL=diindex-ember-dev.map