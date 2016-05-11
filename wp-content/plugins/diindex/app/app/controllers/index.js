import Ember from 'ember';
import defaultTheme from '../themes/drillinginfo';

export default Ember.Controller.extend({
	// lower bounds for computed chart configuration properties
	prodCapMin: null,
	rigCountMin: null,
	// chart theme
	theme: defaultTheme,
	// chart configuration properties
	rigCount: Ember.computed(function(){
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
					style: {"color" : "#fff"}
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
			        style: {"color" : "#fff"}
			    },
			    labels: {
					style: {"color" : "#fff"},
					padding: 0,
					step: 1
				},
				lineColor: '#4395b3'
			}
		}
	},
	prodCap : Ember.computed(function(){
		var prodCapConfig = {
			chartOptions: {
				chart: {
				    type: 'column'
				},
				plotOptions: {
					column: {
						color: {
							linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
						    stops: [
						        [0, '#78be20'],
						        [1, '#68a41c']
						    ]
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
	prodCapByType : {
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
					style: {"color" : "#fff"}
				},
				labels: {
					useHTML: true,
					style: {
						color : "#fff",
						paddingTop: '15px'
					}	
				}
			},
			yAxis: [
				// oil
				{
				    title: {
				        text: 'MBBL/Day',
				        style: {"color" : "#fff", "fontSize":"15px"}
				    },
				    labels: {
						style: {"color" : "#fff"}	
					}
			    },
			    //gas
			    {
				    title: {
				        text: 'BCF/Day',
				        style: {"color" : "#fff", "fontSize":"15px"}
				    },
				    labels: {
						style: {"color" : "#fff"}	
					},
				    opposite: true
			    },
			]
		},
	}
});
