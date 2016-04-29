import Ember from 'ember';
import defaultTheme from '../themes/drillinginfo';

export default Ember.Controller.extend({
	theme: defaultTheme,
	rigCount: {
		chartOptions: {
			chart: {
			    type: 'areaspline'
			},
			plotOptions: {
				areaspline: {
					showInLegend: false,
					fillColor: '#396ab1',
					lineColor: "#7293cb",
					marker: {
	                    enabled: true,
	                    symbol: 'circle',
	                    radius: 1,
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
	},
	permitCount: {
		chartOptions: {
			chart: {
			    type: 'line',
			    backgroundColor: '#6b4c9a',
			    //height: 200,
			    spacingRight: 20,
			    spacingTop: 40
			},
			plotOptions: {
				line: {
					showInLegend: false,
			    	pointIntervalUnit: 'month',
			    	color: '#fff',
			    	lineWidth: 3,
			    	marker: {
						fillColor: '#fff'
					}
			    }
			},
			title: {
			    text: '',
			    style: {"color":"#fff"}
			},
			states: {
				hover: {
					enabled: true,
					halo: {
						attributes: true,
						size: 20,
						opacity: 0.5
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
					style: {"color" : "#fff"}	
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
	prodCap : {
		chartOptions: {
			chart: {
			    type: 'column'
			},
			plotOptions: {
				column: {
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
			    min: 300
			}
		},
	},
	prodCapByType : {
		chartOptions: {
			chart: {
	            type: 'line'
			},
			plotOptions: {
				line: {
					showInLegend: false,
			    	pointIntervalUnit: 'month',
			    	lineColor: '#fff',
			    	lineWidth: 4,
			    }
			},
			title: {
			    text: 'U.S. Production Capacity - Oil vs. Gas',
			    style: {"fontSize": "20px", "color" : "#fff"}
			},
			xAxis: {
				gridLineWidth: 0,
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
			    },
			]
		},
	}
});
