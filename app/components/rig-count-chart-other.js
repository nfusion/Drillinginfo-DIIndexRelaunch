import Highcharts from 'ember-highcharts/components/high-charts';
import defaultTheme from '../themes/drillinginfo';

export default Highcharts.extend({
	chartMode: '', // empty, 'StockChart', or 'Map'
	chartOptions: {
		chart: {
		    type: 'spline'
		},
		plotOptions: {
			spline: {
				showInLegend: false,
				dashStyle: 'solid',
				lineWidth: 2,
				//lineColor: '#1d54a0',
				states: {
					hover: {
						halo: false
					}
				},
				marker: {
                    enabled: true,
                    symbol: 'circle',
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