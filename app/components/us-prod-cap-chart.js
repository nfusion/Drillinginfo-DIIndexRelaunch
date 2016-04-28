import Highcharts from 'ember-highcharts/components/high-charts';
import defaultTheme from '../themes/drillinginfo';

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
	chartData: [],
	theme: defaultTheme
});
