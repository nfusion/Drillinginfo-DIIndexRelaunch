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
					marker: {
	                    enabled: true,
	                    symbol: 'circle',
	                    radius: 3,
	                    states: {
	                        hover: {
	                            enabled: true
	                        }
	                    }
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
	},
	permitCount: {
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
	},
	prodCapByType : {
		chartOptions: {
			chart: {
			    backgroundColor: '#fff',
	            type: 'line',
			},
			plotOptions: {
				line: {
					showInLegend: false,
			    	pointIntervalUnit: 'month',

			    },
			},
			title: {
			    text: 'U.S. Production Capacity - Oil vs. Gas',
			    style: {"fontSize": "20px"}
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
			    },
			]
		},
	}
});
