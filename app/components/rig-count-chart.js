import Highcharts from 'ember-highcharts/components/high-charts';

export default Highcharts.extend({
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
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
			}
		},
		colors : ['#78BE20'],
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
		    min: 450
		}
	},
	chartData: [],
	theme: {}
});