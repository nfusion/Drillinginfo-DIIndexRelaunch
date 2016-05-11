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
				    zoomType: 'x'
			    },
				plotOptions: {
					areaspline: {
						showInLegend: false,
						fillColor: {
							linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				        	stops: [
				            	[0, '#7293cb'],
				            	[1, '#396ab1']
				        	]
						},
						lineColor: "#7293cb",
						marker: {
		                    enabled: true,
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
				title: {
				    text: ''
				},
				subtitle: {
		            text: document.ontouchstart === undefined ?
		                'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
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
				    min: null
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
			    backgroundColor: '#6b4c9a',
			    zoomType: 'x',
			    //height: 200,
			    spacing: 20
			},
			plotOptions: {
				line: {
					showInLegend: false,
			    	pointIntervalUnit: 'month',
			    	color: '#fff',
			    	lineWidth: 4,
			    	marker: {
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
			title: {
			    text: '',
			    style: {"color":"#fff"}
			},
			subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
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
				}
			},
			yAxis: {
			    title: {
			        text: 'Permit Count',
			        style: {"color" : "#fff"}
			    },
			    labels: {
					style: {"color" : "#fff"}	
				}
			}
		}
	},
	prodCap : Ember.computed(function(){
		var prodCapConfig = {
			chartOptions: {
				chart: {
				    type: 'column',
				    //width: 555,
				    height: 214
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
