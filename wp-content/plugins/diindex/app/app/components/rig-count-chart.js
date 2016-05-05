import Highcharts from 'ember-highcharts/components/high-charts';
import defaultTheme from '../themes/drillinginfo';

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
                    radius: 3,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
			},
			line: {
				lineWidth: 10,
				marker: {
					lineWidth: 6,
					lineColor: '#fff',
					fillColor: '#1d54a0'
				}
			},
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
	chartData: [],
	theme: defaultTheme
});