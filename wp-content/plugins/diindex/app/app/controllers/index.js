import Ember from 'ember';
import defaultTheme from '../themes/drillinginfo';

export default Ember.Controller.extend({
	theme: defaultTheme,
	rigCount: {
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
					text: 'Date',
					margin: 20
				}
			},
			yAxis: {
			    title: {
			        text: 'Rig Count',
			        margin: 20
			    },
			    min: 350
			}
		},
	},
	permitCount: {
		chartOptions: {
			chart: {
			    type: 'line',
			    backgroundColor: '#6b4c9a'
			},
			plotOptions: {
				line: {
			     	color: '#fff'
			    }
			},
			title: {
			    text: 'Rig Count',
			    style: {"color":"#fff"}
			},
			xAxis: {
				type: 'datetime',
				gridLineColor: 'transparent',
				title: {
					text: 'Date',
					style: {"color" : "#fff"},
					margin: 20
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
			        style: {"color" : "#fff"},
			        margin: 20
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
			    type: 'column',
			    spacingTop: 30
			},
			title: {
			    text: ''
			},
			xAxis: {
				type: 'datetime',
				title: {
					text: 'Month',
					margin: 20
				}
			},
			yAxis: {
			    title: {
			        text: 'MBOE/Day',
			        margin: 20
			    },
			    min: 300
			}
		},
	},
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
			    	colors: ["#fff", "#e1974c"],
			    	marker: {
						lineColor: 'transparent'
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
