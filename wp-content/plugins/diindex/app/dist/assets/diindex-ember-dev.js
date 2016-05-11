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
define('diindex-ember-dev/controllers/index', ['exports', 'ember', 'diindex-ember-dev/themes/drillinginfo'], function (exports, _ember, _diindexEmberDevThemesDrillinginfo) {
	exports['default'] = _ember['default'].Controller.extend({
		// lower bounds for computed chart configuration properties
		prodCapMin: null,
		rigCountMin: null,
		// chart theme
		theme: _diindexEmberDevThemesDrillinginfo['default'],
		// chart configuration properties
		rigCount: _ember['default'].computed(function () {
			var rigConfig = {
				chartOptions: {
					chart: {
						type: 'areaspline',
						zoomType: 'x',
						backgroundColor: '#585b5d',
						style: {
							borderRadius: '0 0 .5rem .5rem'
						}
					},
					plotOptions: {
						areaspline: {
							showInLegend: false,
							fillColor: "#dc7c23",
							lineColor: "#dc7c23",
							marker: {
								enabled: false,
								symbol: 'circle',
								radius: 1,
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
				}
			};
			rigConfig.chartOptions.yAxis.min = this.get('rigCountMin');
			return rigConfig;
		}),
		permitCount: {
			chartOptions: {
				chart: {
					type: 'line',
					backgroundColor: '#006f98',
					style: {
						borderRadius: '0 0 .5rem .5rem'
					}
				},
				plotOptions: {
					line: {
						showInLegend: false,
						pointIntervalUnit: 'month',
						color: '#fff',
						lineWidth: 4,
						marker: {
							enabled: true,
							fillColor: '#fff'
						},
						states: {
							hover: {
								enabled: true,
								halo: {
									attributes: true,
									size: 20,
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
						style: { "color": "#fff" }
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
						style: { "color": "#fff" }
					},
					labels: {
						style: { "color": "#fff" },
						padding: 0,
						step: 1
					},
					lineColor: '#4395b3'
				}
			}
		},
		prodCap: _ember['default'].computed(function () {
			var prodCapConfig = {
				chartOptions: {
					chart: {
						type: 'column'
					},
					plotOptions: {
						column: {
							color: {
								linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
								stops: [[0, '#78be20'], [1, '#68a41c']]
							},
							showInLegend: false,
							pointIntervalUnit: 'month',
							states: {
								hover: {
									color: '#b2df8a'
								}
							}
						}
					},
					title: {
						text: ''
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
				}
			};
			prodCapConfig.chartOptions.yAxis.min = this.get('prodCapMin');
			return prodCapConfig;
		}),
		prodCapByType: {
			chartOptions: {
				colors: ["#fff", "#e1974c", "#84ba5b"],
				chart: {
					type: 'line',
					backgroundColor: '#396ab1',
					spacingRight: 20,
					spacingTop: 40
				},
				plotOptions: {
					line: {
						showInLegend: false,
						pointIntervalUnit: 'month',
						lineWidth: 4,
						marker: {
							lineColor: 'transparent'
						},
						states: {
							hover: {
								enabled: true,
								halo: {
									attributes: true,
									size: 20,
									opacity: 0.25
								}
							}
						}
					}
				},
				title: {
					text: '',
					color: "#fff"
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
						style: { "color": "#fff" }
					},
					labels: {
						useHTML: true,
						style: {
							color: "#fff",
							paddingTop: '15px'
						}
					}
				},
				yAxis: [
				// oil
				{
					title: {
						text: 'MBBL/Day',
						style: { "color": "#fff", "fontSize": "15px" }
					},
					labels: {
						style: { "color": "#fff" }
					}
				},
				//gas
				{
					title: {
						text: 'BCF/Day',
						style: { "color": "#fff", "fontSize": "15px" }
					},
					labels: {
						style: { "color": "#fff" }
					},
					opposite: true
				}]
			}
		}
	});
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
					var capacity_data = _lodashCollection['default'].sortBy(data.contents.elements, 'monthnumber');
					//console.log('initial capacity data: ',capacity_data);

					// parse the most recent month
					var most_recent = capacity_data[capacity_data.length - 1];
					//console.log('most_recent:',most_recent);

					var runDate = (0, _moment['default'])(most_recent.rundatetime);
					var oldData = diffDate(runDate);

					// error out if we are past the 'freshness' date
					if (oldData) return;

					var prodCapData = {
						usProdCap: most_recent
					};

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
						pointStart: _moment['default'].utc(recent_data[0].rundatetime).valueOf(),
						data: highchart_series
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

					var highchart_series = [];
					// use the negative daily count index to order data.
					var ordered_data = _lodashCollection['default'].sortBy(data.contents.elements, 'date_order');

					// return a max of thirty days of data
					ordered_data = ordered_data.slice(Math.max(highchart_series.length - 30, 0));

					$.each(ordered_data, function () {
						highchart_series.push(this.rig_count);
					});

					var series = [{
						name: 'Rig Count',
						pointStart: _moment['default'].utc(ordered_data[0].rig_date).valueOf(),
						pointInterval: 24 * 3600 * 1000, // one day
						data: highchart_series
					}];
					return series;
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
						pointStart: _moment['default'].utc([ordered_data[0].year, ordered_data[0].month - 1]).valueOf(),
						data: highchart_series
					}];

					permitData.chart = series;
					return permitData;
				}),

				maps: $.ajax(maps_settings).then(function (data) {
					if (!data.length) return;
					// expecting a single page, since query by slug.
					return data[0];
				})
			});

			//console.log(data);

			return data;
		},
		setupController: function setupController(controller, model) {
			var series;
			var min;
			controller.set('model', model);
			// lower bounds for rig count
			series = model.rigCount[0].data;
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
            "line": 2,
            "column": 29
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
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "src", "vendor/oval.svg");
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
              "line": 5,
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
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          var el3 = dom.createTextNode("BCF Per Day: ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(", ");
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
          var element0 = dom.childAt(fragment, [0, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createUnsafeMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["content", "months.newgasproduction_bcfperday", ["loc", [null, [3, 18], [3, 55]]]], ["inline", "delta-direction", [["get", "months.pctchggas", ["loc", [null, [3, 76], [3, 92]]]]], [], ["loc", [null, [3, 57], [3, 95]]]]],
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
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
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
            "line": 7,
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "months", ["loc", [null, [1, 6], [1, 12]]]]], [], 0, 1, ["loc", [null, [1, 0], [7, 7]]]]],
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
              "line": 5,
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
          var el2 = dom.createElement("li");
          var el3 = dom.createTextNode("MBBL Per Day: ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(", ");
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
          var element0 = dom.childAt(fragment, [0, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createUnsafeMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["content", "months.newoilproduction_mbblperday", ["loc", [null, [3, 18], [3, 56]]]], ["inline", "delta-direction", [["get", "months.pctchgoil", ["loc", [null, [3, 77], [3, 93]]]]], [], ["loc", [null, [3, 58], [3, 96]]]]],
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
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
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
            "line": 7,
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "months", ["loc", [null, [1, 6], [1, 12]]]]], [], 0, 1, ["loc", [null, [1, 0], [7, 7]]]]],
      locals: [],
      templates: [child0, child1]
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
              "line": 5,
              "column": 3
            },
            "end": {
              "line": 7,
              "column": 3
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
          var el1 = dom.createTextNode("			");
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
        statements: [["inline", "high-charts", [], ["content", ["subexpr", "@mut", [["get", "model.rigCount", ["loc", [null, [6, 25], [6, 39]]]]], [], []], "chartOptions", ["subexpr", "@mut", [["get", "rigCount.chartOptions", ["loc", [null, [6, 53], [6, 74]]]]], [], []], "theme", ["subexpr", "@mut", [["get", "theme", ["loc", [null, [6, 81], [6, 86]]]]], [], []]], ["loc", [null, [6, 3], [6, 88]]]]],
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
              "line": 7,
              "column": 3
            },
            "end": {
              "line": 9,
              "column": 3
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
          var el1 = dom.createTextNode("			");
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
        statements: [["inline", "high-charts", [], ["content", ["subexpr", "@mut", [["get", "model.permitCount.chart", ["loc", [null, [15, 24], [15, 47]]]]], [], []], "chartOptions", ["subexpr", "@mut", [["get", "permitCount.chartOptions", ["loc", [null, [15, 61], [15, 85]]]]], [], []], "theme", ["subexpr", "@mut", [["get", "theme", ["loc", [null, [15, 92], [15, 97]]]]], [], []]], ["loc", [null, [15, 2], [15, 99]]]]],
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
              "line": 16,
              "column": 2
            },
            "end": {
              "line": 18,
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
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.5",
            "loc": {
              "source": null,
              "start": {
                "line": 30,
                "column": 3
              },
              "end": {
                "line": 44,
                "column": 3
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
            var el1 = dom.createTextNode("			");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "large-6 columns");
            var el2 = dom.createTextNode("\n\n				");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createTextNode("U.S. Production Capacity");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n			");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "large-6 columns");
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createTextNode("U.S. Oil Production Capacity");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createTextNode("U.S. Gas Production Capacity");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element8 = dom.childAt(fragment, [1]);
            var element9 = dom.childAt(fragment, [3]);
            var morphs = new Array(5);
            morphs[0] = dom.createMorphAt(element8, 3, 3);
            morphs[1] = dom.createMorphAt(element8, 5, 5);
            morphs[2] = dom.createMorphAt(element9, 3, 3);
            morphs[3] = dom.createMorphAt(element9, 7, 7);
            morphs[4] = dom.createMorphAt(element9, 9, 9);
            return morphs;
          },
          statements: [["inline", "us-production-capacity-widget", [], ["months", ["subexpr", "@mut", [["get", "model.prodCapacity.usProdCap", ["loc", [null, [34, 43], [34, 71]]]]], [], []]], ["loc", [null, [34, 4], [34, 73]]]], ["inline", "high-charts", [], ["content", ["subexpr", "@mut", [["get", "model.prodCapacity.usProdCapMboeChart", ["loc", [null, [35, 26], [35, 63]]]]], [], []], "chartOptions", ["subexpr", "@mut", [["get", "prodCap.chartOptions", ["loc", [null, [35, 78], [35, 98]]]]], [], []], "theme", ["subexpr", "@mut", [["get", "theme", ["loc", [null, [35, 105], [35, 110]]]]], [], []]], ["loc", [null, [35, 4], [35, 112]]]], ["inline", "oil-production-widget", [], ["months", ["subexpr", "@mut", [["get", "model.prodCapacity.usProdCap", ["loc", [null, [39, 35], [39, 63]]]]], [], []]], ["loc", [null, [39, 4], [39, 65]]]], ["inline", "gas-production-widget", [], ["months", ["subexpr", "@mut", [["get", "model.prodCapacity.usProdCap", ["loc", [null, [41, 35], [41, 63]]]]], [], []]], ["loc", [null, [41, 4], [41, 65]]]], ["inline", "high-charts", [], ["content", ["subexpr", "@mut", [["get", "model.prodCapacity.prodOilVsGas", ["loc", [null, [42, 26], [42, 57]]]]], [], []], "chartOptions", ["subexpr", "@mut", [["get", "prodCapByType.chartOptions", ["loc", [null, [42, 71], [42, 97]]]]], [], []], "theme", ["subexpr", "@mut", [["get", "theme", ["loc", [null, [42, 104], [42, 109]]]]], [], []]], ["loc", [null, [42, 4], [42, 111]]]]],
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
                "line": 44,
                "column": 3
              },
              "end": {
                "line": 46,
                "column": 3
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
            var el1 = dom.createTextNode("			");
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
                "line": 58,
                "column": 4
              },
              "end": {
                "line": 73,
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
          statements: [["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topOperatorsGas", ["loc", [null, [62, 19], [62, 40]]]]], [], []]], ["loc", [null, [62, 5], [62, 42]]]], ["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topOperatorsOil", ["loc", [null, [64, 19], [64, 40]]]]], [], []]], ["loc", [null, [64, 5], [64, 42]]]], ["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topCountiesGas", ["loc", [null, [69, 19], [69, 39]]]]], [], []]], ["loc", [null, [69, 5], [69, 41]]]], ["inline", "top-ten", [], ["obj", ["subexpr", "@mut", [["get", "model.topCountiesOil", ["loc", [null, [71, 19], [71, 39]]]]], [], []]], ["loc", [null, [71, 5], [71, 41]]]]],
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
                "line": 73,
                "column": 4
              },
              "end": {
                "line": 75,
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
                  "line": 97,
                  "column": 5
                },
                "end": {
                  "line": 99,
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
            statements: [["attribute", "href", ["concat", [["get", "model.maps.acf.wells_expanded_version", ["loc", [null, [98, 17], [98, 54]]]]]]], ["attribute", "src", ["concat", [["get", "model.maps.acf.wells_map_image.url", ["loc", [null, [98, 86], [98, 120]]]]]]], ["attribute", "alt", ["concat", [["get", "model.maps.acf.wells_map_image.title", ["loc", [null, [98, 131], [98, 167]]]]]]]],
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
                  "line": 99,
                  "column": 5
                },
                "end": {
                  "line": 101,
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
            statements: [["attribute", "src", ["concat", [["get", "model.maps.acf.wells_map_image.url", ["loc", [null, [100, 18], [100, 52]]]]]]], ["attribute", "alt", ["concat", [["get", "model.maps.acf.wells_map_image.title", ["loc", [null, [100, 63], [100, 99]]]]]]]],
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
                  "line": 105,
                  "column": 5
                },
                "end": {
                  "line": 107,
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
            statements: [["attribute", "href", ["concat", [["get", "model.maps.acf.rig_expanded_version", ["loc", [null, [106, 17], [106, 52]]]]]]], ["attribute", "src", ["concat", [["get", "model.maps.acf.rig_map_image.url", ["loc", [null, [106, 84], [106, 116]]]]]]], ["attribute", "alt", ["concat", [["get", "model.maps.acf.rig_map_image.title", ["loc", [null, [106, 127], [106, 161]]]]]]]],
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
                  "line": 107,
                  "column": 5
                },
                "end": {
                  "line": 109,
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
            statements: [["attribute", "src", ["concat", [["get", "model.maps.acf.rig_map_image.url", ["loc", [null, [108, 18], [108, 50]]]]]]], ["attribute", "alt", ["concat", [["get", "model.maps.acf.rig_map_image.title", ["loc", [null, [108, 61], [108, 95]]]]]]]],
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
                "line": 94,
                "column": 4
              },
              "end": {
                "line": 111,
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
          statements: [["block", "if", [["get", "model.maps.acf.wells_expanded_version", ["loc", [null, [97, 11], [97, 48]]]]], [], 0, 1, ["loc", [null, [97, 5], [101, 12]]]], ["block", "if", [["get", "model.maps.acf.rig_expanded_version", ["loc", [null, [105, 11], [105, 46]]]]], [], 2, 3, ["loc", [null, [105, 5], [109, 12]]]]],
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
                "line": 111,
                "column": 4
              },
              "end": {
                "line": 113,
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
              "line": 22,
              "column": 0
            },
            "end": {
              "line": 118,
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
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" First Tab - Production Capacity ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n	");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "row");
          var el4 = dom.createTextNode("\n		");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "large-12 columns panel");
          var el5 = dom.createTextNode("\n			");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("h2");
          var el6 = dom.createTextNode("Production Capacity");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("		");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" end .row ");
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
          var el3 = dom.createComment(" end .row ");
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
          var el3 = dom.createComment(" \n			So I have a couple of ideas on implementation for this. But this is the best one.\n			We will use Wordpress' REST API to pull custom image fields from a node where \n			they select two images and two PDFs from the media library, one of each for wells and rigs.\n			That way we don't have to rebuild the app or overwrite any imagery; we just pull\n			the data real-time same as we are doing everything else.\n		");
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
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5, 3, 5, 1]), 3, 3);
          return morphs;
        },
        statements: [["block", "if", [["get", "model.prodCapacity", ["loc", [null, [30, 9], [30, 27]]]]], [], 0, 1, ["loc", [null, [30, 3], [46, 10]]]], ["block", "if", [["get", "model.topCountiesGas", ["loc", [null, [58, 10], [58, 30]]]]], [], 2, 3, ["loc", [null, [58, 4], [75, 11]]]], ["block", "if", [["get", "model.maps", ["loc", [null, [94, 10], [94, 20]]]]], [], 4, 5, ["loc", [null, [94, 4], [113, 11]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5]
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
            "line": 118,
            "column": 17
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
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "widget");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        var el5 = dom.createTextNode("Rig Count");
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
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" end .row ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element10 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element10, [1, 1]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element10, [3]), 3, 3);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.rigCount", ["loc", [null, [5, 9], [5, 23]]]]], [], 0, 1, ["loc", [null, [5, 3], [9, 10]]]], ["block", "if", [["get", "model.permitCount.chart", ["loc", [null, [14, 8], [14, 31]]]]], [], 2, 3, ["loc", [null, [14, 2], [18, 9]]]], ["block", "zf-accordion", [], [], 4, null, ["loc", [null, [22, 0], [118, 17]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
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
			style: {
				fontFamily: '"Open Sans Condensed", sans-serif;',
				color: '#333'
			},
			plotBorderColor: 'transparent',
			height: 300
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
			gridLineColor: 'transparent',
			gridLineWidth: 1,
			labels: {
				style: {
					color: '#333',
					fontWeight: 'bold',
					fontSize: '1rem'
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
					fontSize: '1rem'
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
					color: '#333',
					fontWeight: 'bold',
					fontSize: '1rem'
				}
			},
			lineColor: '#333',
			lineWidth: 1,
			minorGridLineColor: '#000000',
			minorGridLineWidth: 1,
			minorTickLength: 0,
			tickLength: 0,
			tickWidth: 0,
			title: {
				style: {
					color: '#333',
					fontStyle: 'italic',
					fontSize: '1rem'
				}
			}
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y}</b><br/>',
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
				lineWidth: 2,
				marker: {
					lineWidth: 2,
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
  return { 'default': {"modulePrefix":"diindex-ember-dev","environment":"development","baseURL":"/","locationType":"none","rootElement":"#app","EmberENV":{"FEATURES":{}},"APP":{"connectionPath":"http://local.diindex.nfusion.com/","name":"diindex-ember-dev","version":"0.0.0+33667143"},"exportApplicationGlobal":true}};
});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("diindex-ember-dev/app")["default"].create({"connectionPath":"http://local.diindex.nfusion.com/","name":"diindex-ember-dev","version":"0.0.0+33667143"});
}

/* jshint ignore:end */
//# sourceMappingURL=diindex-ember-dev.map