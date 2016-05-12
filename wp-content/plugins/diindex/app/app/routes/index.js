import Ember from 'ember';
import moment from 'moment';
import _collection from 'lodash/collection';
import ENV from 'diindex-ember-dev/config/environment';

export default Ember.Route.extend({
	rigCountNew : null,
	model: function() {
		var model = this;
		var settings = {
			"async": true,
			"crossDomain": true,
			"dataType": "jsonp",
			"url": ENV.APP.connectionPath + 'wp-content/plugins/diindex/api-proxy.php',
			"method": "GET"
		};

		var capacity_settings = {
			"async" : settings.async,
			"crossDomain" : settings.crossDomain,
			"dataType" : settings.dataType,
			"url" : settings.url,
			"method" : settings.method,
			"data" : {
				"url" : "http://di-api.drillinginfo.com/v1/diindex/media_production_capacity?$format=json"
			}
		};

		var rig_count_settings = {
			"async" : settings.async,
			"crossDomain" : settings.crossDomain,
			"dataType" : settings.dataType,
			"url" : settings.url,
			"method" : settings.method,
			"data" : {
				"url" : "http://di-api.drillinginfo.com/v1/diindex/media_rig_count?$format=json"
			}
		};

		var tc_gas_settings = {
			"async" : settings.async,
			"crossDomain" : settings.crossDomain,
			"dataType" : settings.dataType,
			"url" : settings.url,
			"method" : settings.method,
			"data" : {
				"url" : "http://di-api.drillinginfo.com/v1/diindex/media_top_gas_county?$format=json"
			}
		};

		var tc_oil_settings =  {
			"async" : settings.async,
			"crossDomain" : settings.crossDomain,
			"dataType" : settings.dataType,
			"url" : settings.url,
			"method" : settings.method,
			"data" : {
				"url" : "http://di-api.drillinginfo.com/v1/diindex/media_top_oil_county?$format=json"
			}
		};

		var to_gas_settings = {
			"async" : settings.async,
			"crossDomain" : settings.crossDomain,
			"dataType" : settings.dataType,
			"url" : settings.url,
			"method" : settings.method,
			"data" : {
				"url" : "http://di-api.drillinginfo.com/v1/diindex/media_top_gas_operator?$format=json"
			}
		};

		var to_oil_settings = {
			"async" : settings.async,
			"crossDomain" : settings.crossDomain,
			"dataType" : settings.dataType,
			"url" : settings.url,
			"method" : settings.method,
			"data" : {
				"url" : "http://di-api.drillinginfo.com/v1/diindex/media_top_oil_operator?$format=json"
			}
		};

		var permit_count_settings = {
			"async" : settings.async,
			"crossDomain" : settings.crossDomain,
			"dataType" : settings.dataType,
			"url" : settings.url,
			"method" : settings.method,
			"data" : {
				"url" : "http://di-api.drillinginfo.com/v1/diindex/media_permit_count?$format=json"
			}
		};

		var maps_settings = {
			"async" : true,
			"crossDomain" : true,
			"dataType" : "json",
			"url" : ENV.APP.connectionPath + "wp-json/wp/v2/pages/",
			"method" : "GET",
			"data" : {
				"slug" : "home-page"
			}
		};
		
		function diffDate(fromDate, toDate) {

			toDate = toDate || new moment();
			
			var diffDate = toDate.diff(fromDate, 'days');
			//console.log('diffDate',diffDate);

			// return no data if it's more than 75 days old.
			return ( diffDate > 75 );
		}

		var data = new Ember.RSVP.hash({

			prodCapacity: $.ajax(capacity_settings).then(

				/** 
				 * We will want to return another hash here to cover the following:
				 *  - US Gas Production Capacity (tile)
				 *  - US Oil Production Capacity (tile)
				 *  - US MBOE Production Capacity (tile)
				 *  - MBOE (chart)
				 *  - Gas vs Oil Production Capacity (chart)
				 */	

				function(data){
					// error out if we get a bad response.
					if (data.status.http_code !== 200) return;

					// use the negative month count index to order data.
					let capacity_data = _collection.sortBy(data.contents.elements,'monthnumber'),
						// parse the most recent month
						most_recent = capacity_data[capacity_data.length-1],
						// data freshness
						runDate = moment(most_recent.rundatetime),
						oldData = diffDate(runDate);

					//console.log('initial capacity data: ',capacity_data);
					console.log('most_recent:',most_recent);						

					// error out if we are past the 'freshness' date
					if (oldData) return;
					
					let prodCapData = {
						current: most_recent
					};
					// numeric value formatting
					prodCapData.current.newboeproduction_mboeperday.toLocaleString();
					prodCapData.current.newoilproduction_mbblperday.toLocaleString();
					prodCapData.current.newgasproduction_bcfperday.toLocaleString();

					let highchart_series = [],
						oil_series = [],
						gas_series = [],
						// return a max of six months of data
						recent_data = capacity_data.slice(Math.max(capacity_data.length - 6, 0));

					$.each(recent_data, function(){
						highchart_series.push(this.newboeproduction_mboeperday);
						oil_series.push(this.newoilproduction_mbblperday);
						gas_series.push(this.newgasproduction_bcfperday);
					});

					// chart series - total energy production
					var series_mboe = [
					    {
					    	name: 'MBOE',
							pointStart: moment(recent_data[0].rundatetime).valueOf(),
					    	data: highchart_series,
					    	dataLabels: {
			                    align: 'left',
			                    enabled: true,
			                    style: {
			                    	fontSize: '.8rem'
			                    }
			                }
					    }
					];
					prodCapData.usProdCapMboeChart = series_mboe;


					// chart series - oil vs gas production
					var series_oil_v_gas = [
						{
							name: 'Oil',
							pointStart: moment.utc(recent_data[0].rundatetime).valueOf(),
							data: oil_series,
							yAxis: 0
						},
						{
							name: 'Gas',
							pointStart: moment.utc(recent_data[0].rundatetime).valueOf(),
							data: gas_series,
							yAxis: 1
						}
					];

					prodCapData.prodOilVsGas = series_oil_v_gas;

					return prodCapData;
				}
			),

			rigCount: $.ajax(rig_count_settings).then(
				// needs to return tile and chart

				function(data){

					if (data.status.http_code !== 200) return;

					var rigCountData = {};

					var highchart_series = [];
					// use the negative daily count index to order data.
					var ordered_data = _collection.sortBy(data.contents.elements,'date_order');
				    
				    // return a max of thirty days of data
					ordered_data = ordered_data.slice(Math.max(highchart_series.length - 30, 0));

					$.each(ordered_data, function(){
						highchart_series.push(this.rig_count);
					});

					rigCountData.series = [
					    {
					    	name: 'Rig Count',
					    	pointStart: moment.utc(ordered_data[0].rig_date).valueOf(),
					    	pointInterval: 24 * 3600 * 1000, // one day
					    	data: highchart_series
					    }
					];
					rigCountData.current = ordered_data[ordered_data.length-1];
					rigCountData.current.rig_count = rigCountData.current.rig_count.toLocaleString();
					return rigCountData;
				}
			),

			topCountiesGas: $.ajax(tc_gas_settings).then(
				function(data){
					var topten = {
						labels: [
							'',
							'County',
							'State',
							'Prev.',
							'MMCF/Day'
						],
						data: []
					};
					
					var topten_data = _collection.sortBy(data.contents.elements,'rank');

					$.each(topten_data, function(){
						topten.data.push([
							this.rank,
							this.county.slice(0, this.county.length-4).trim(),
							this.county.slice(-4).replace(/[()]/g, ''),
							this.prevrank || '--',
							this.gasproduction_mmcfperday
						]);
					});


					return topten;

				}
			),

			topCountiesOil : $.ajax(tc_oil_settings).then(
				function(data){
					var topten = {
						labels: [
							'',
							'County',
							'State',
							'Prev.',
							'MBBL/Day'
						],
						data: []
					};

					// sort 1-10 by rank
					var topten_data = _collection.sortBy(data.contents.elements,'rank');

					$.each(topten_data, function(){
						topten.data.push([
							this.rank,
							this.county.slice(0, this.county.length-4).trim(),
							this.county.slice(-4).replace(/[()]/g, ''),
							this.prevrank,
							this.oilproduction_mbblperday
						]);
					});


					return topten;

				}
			),

			topOperatorsGas: $.ajax(to_gas_settings).then(
				function(data){
					var topten = {
						labels: [
							'',
							'Operator',
							'Prev.',
							'MMCF/Day'
						],
						data: []
					};
					
					// sort 1-10 by rank
					var topten_data = _collection.sortBy(data.contents.elements,'rank');

					$.each(topten_data, function(){
						topten.data.push([
							this.rank,
							this.operator,
							this.prevrank,
							this.gasproduction_mmcfperday
						]);
					});


					return topten;

				}
			),
			
			topOperatorsOil : $.ajax(to_oil_settings).then(
				function(data){
					var topten = {
						labels: [
							'',
							'Operator',
							'Prev.',
							'MBBL/Day'
						],
						data: []
					};

					// sort 1-10 by rank
					var topten_data = _collection.sortBy(data.contents.elements,'rank');
					
					$.each(topten_data, function(){
						topten.data.push([
							this.rank,
							this.operator,
							this.prevrank,
							this.oilproduction_mbblperday
						]);
					});


					return topten;

				}
			), 

			permitCount: $.ajax(permit_count_settings).then(
				// needs to return tile and chart
				function(data){
					if (data.status.http_code !== 200) return;

					// use the negative month count index to order data.
					var ordered_data = _collection.sortBy(data.contents.elements, 'month_order');

					var most_recent = ordered_data[ordered_data.length-1];

					var runDate = new moment([most_recent.year, most_recent.month-1]);
					var oldData = diffDate(runDate);

					if (oldData) return;

					var permitData = {};

					var highchart_series = [];
					
					// return a max of six months of data
					ordered_data = ordered_data.slice(Math.max(ordered_data.length - 6, 0));
					//console.log(ordered_data);

					$.each(ordered_data, function(){
						highchart_series.push(this.permit_count);
					});

					var series = [
					    {
					    	name: 'Permit Count',
					    	pointStart: moment([ordered_data[0].year, ordered_data[0].month-1]).valueOf(),
					    	data: highchart_series
					    }
					];

					permitData.chart = series;
					permitData.current = most_recent;
					permitData.current.permit_date = [most_recent.year, most_recent.month-1];
					permitData.current.permit_count = most_recent.permit_count.toLocaleString();
					//console.log(permitData.current);
					return permitData;
				}
			),

			maps: $.ajax(maps_settings).then(
				function(data) {
					if (!data.length) return;
					// expecting a single page, since query by slug.
					return data[0];
				}
			)
		});

		//console.log(data);

		return data;
	},
	setupController: function(controller, model) {
		let series, min;
		controller.set('model', model);
		//console.log(model);

		// lower bounds for rig count
		series = model.rigCount.series[0].data;
		min = _collection.min(series);
    	controller.set('rigCountMin', min);

    	// lower bounds for production capacity
    	series = model.prodCapacity.usProdCapMboeChart[0].data;
    	min = _collection.min(series);
    	controller.set('prodCapMin',min);
  	}
});
