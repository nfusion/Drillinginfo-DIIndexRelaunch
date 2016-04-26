import Highcharts from 'ember-highcharts/components/high-charts';
import defaultTheme from '../themes/drillinginfo';

export default Highcharts.extend({
	chartMode: '', // empty, 'StockChart', or 'Map'
	chartOptions: {
		chart: {
		    backgroundColor: '#e9e7e4',
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
		    style:{
		    	"fontSize": "18px"
		    }
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
	chartData: [],
	theme: defaultTheme
});
