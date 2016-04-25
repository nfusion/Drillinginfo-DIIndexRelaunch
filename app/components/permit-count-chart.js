import Highcharts from 'ember-highcharts/components/high-charts';
import defaultTheme from '../themes/drillinginfo';

export default Highcharts.extend({
	chartMode: '', // empty, 'StockChart', or 'Map'
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
	},
  	chartData: [],
  	theme: defaultTheme
});
