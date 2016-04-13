import Highcharts from 'ember-highcharts/components/high-charts';

export default Highcharts.extend({
	chartMode: '', // empty, 'StockChart', or 'Map'
	chartOptions: {
		chart: {
		    type: 'area'
		},
		plotOptions: {
			area: {
				showInLegend: false
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
		    }
		}
	},
	chartData: [],
	theme: {}
});