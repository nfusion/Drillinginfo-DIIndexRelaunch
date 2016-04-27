import Highcharts from 'ember-highcharts/components/high-charts';
import defaultTheme from '../themes/drillinginfo';

export default Highcharts.extend({
	chartMode: '', // empty, 'StockChart', or 'Map'
	chartOptions: {
		chart: {
		    type: 'areaspline'
		},
		plotOptions: {
			areaspline: {
				showInLegend: false,
				dashStyle: 'ShortDot',
				lineWidth: 3,
				//lineColor: '#1d54a0',
				states: {
					hover: {
						halo: false
					}
				},
				marker: {
                    enabled: true,
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#296ab1',
                    lineColor: '#296ab1',
                    lineWidth: 4,
                    states: {
                        hover: {
                            enabled: true,
                        }
                    }
                }
			}
		},
		title: {
		    text: 'Rig Count Other'
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