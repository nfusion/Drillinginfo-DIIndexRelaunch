import Ember from 'ember';
import defaultTheme from '../themes/drillinginfo';
import ENV from 'diindex-ember-dev/config/environment';

export default Ember.Controller.extend({
	actions: {

	},
	// lower bounds for computed chart configuration properties
	prodCapMin: null,
	rigCountMin: null,
	// chart theme
	theme: defaultTheme,
	// chart configuration properties
	rigCount: Ember.computed(function(){
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
	            text: document.ontouchstart === undefined ?
	                'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
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
				},
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
				},
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
						color : "#fff",
						paddingTop: '15px'
					}
				},
				lineColor: '#4395b3'
			},
			yAxis: {
			    title: {
			        text: 'Permit Count',
			        style: {
			        	color : "#fff"
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
	prodCap : Ember.computed(function(){
		var prodCapConfig = {};
		prodCapConfig.chartOptions = {
			chart: {
			    type: 'areaspline'
			},
			plotOptions: {
				areaspline: {
					fillColor: {
						linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
					    stops: [
					        [0, '#7251a0'],
					        [1, '#9165a9']
					    ]
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
			changeText: 'Since previous month',
		};
		
		return prodCapConfig;
	}),
	prodCapByType : {
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
			    		enabled: true,
						//fillColor: '#fff'
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
			tooltip: {
				useHTML: true,
				pointFormat: '<span>{series.name}: </span>' +
                '<span style="text-align: right"><b>{point.y} Units</b></span>',
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
						color : "#fff"
					}
				},
				labels: {
					useHTML: true,
					style: {
						color : "#fff",
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
				        style: {"color" : "#fff", "fontSize":"0.625rem"}
				    },
				    labels: {
						style: {"color" : "#fff"}	
					},
					gridLineColor: '#4395b3',
			    },
			    //gas
			    {
				    title: {
				        text: 'BCF/Day',
				        style: {"color" : "#fff", "fontSize":"0.625rem"}
				    },
				    labels: {
						style: {"color" : "#fff"}	
					},
				    opposite: true,
					gridLineColor: '#4395b3',	    },
			]
		},
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
	},
	toggleOptions: {
		group1: {
			title: 'New Production by <strong>Operators</strong>',
		},
		group2: {
			title: 'New Production by <strong>County</strong>',
		},
		switch: {
			id: 'toggleCounties',
			text: 'View Oil',
			offState: {
				title: 'Oil'
			},
			onState: {
				title: 'Gas'
			}
		}
	}
});
