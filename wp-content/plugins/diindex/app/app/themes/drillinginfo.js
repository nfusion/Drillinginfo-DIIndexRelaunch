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

export default Highcharts.extend ({
	colors: ["#78be20", "#1d54a0", "#585b5d"],
	chart: {
		backgroundColor: '#fff',
		height: 215,
		style: {
			fontFamily: '"Open Sans Condensed", sans-serif;',
			color: '#333'
		},
		plotBorderColor: 'transparent'
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
            },
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