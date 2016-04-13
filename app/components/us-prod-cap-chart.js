import Highcharts from 'ember-highcharts/components/high-charts';
export default Highcharts.extend({
	chartMode: '', // empty, 'StockChart', or 'Map'
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
		colors : ['#78BE20'],
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
		        text: 'MMBOE/Day'
		    }
		}
	},
	chartData: [],
	theme: {}
});
