/**
 * Dark blue theme for Highcharts JS
 * @author Torstein Honsi
 */

// Load the fonts
Highcharts.createElement('link', {
	href: 'https://fonts.googleapis.com/css?family=Unica+One',
	rel: 'stylesheet',
	type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

export default Highcharts.extend ({
	colors: ["#78be20", "#1d54a0", "#585b5d"],
	chart: {
		backgroundColor: {
			linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
			stops: [
				[0, '#FFFFFF'],
				[1, '#ffffff']
			]
		},
		style: {
			fontFamily: "'Unica One', sans-serif",
			color: '#ffffff'
		},
		plotBorderColor: '#333333'
	},
	title: {
		style: {
			color: '#FFFFFF',
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
		visible: false,
		gridLineColor: '#fff',
		gridLineWidth: 1,
		labels: {
			style: {
				color: '#333'
			}
		},
		lineColor: 'transparent',
		lineWidth: 0,
		minorGridLineColor: '#000000',
		minorGridLineWidth: 0,
		minorTickLength: 0,
		tickLength: 0,
		tickWidth: 0,
		title: {
			style: {
				color: '#ffffff'

			}
		}
	},
	yAxis: {
		visible: false,
		gridLineColor: '#fff',
		gridLineWidth: 5,
		lineColor: '#ffffff',
		labels: {
			style: {
				color: 'red'
			}
		},
		lineColor: 'transparent',
		lineWidth: 0,
		minorGridLineColor: '#000000',
		minorGridLineWidth: 0,
		minorTickLength: 0,
		tickLength: 0,
		tickWidth: 0,
		title: {
			style: {
				color: '#ffffff'

			}
		}
	},
	tooltip: {
		backgroundColor: 'rgba(120, 190, 32, 0.85)',
		style: {
			color: '#FFF',
			fontSize: '18px',
			padding: '10px',
			paddingTop: '0px'
		}
	},
	plotOptions: {
		column: {
			borderWidth: 0,
			dataLabels: {
				color: '#ffffff'
			}
		},
<<<<<<< Updated upstream
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
=======
		line: {
			lineWidth: 8,
			marker: {
				lineWidth: 5,
				lineColor: '#fff',
				fillColor: '#1d54a0'
			}
>>>>>>> Stashed changes
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