import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var settings = {
			"async": true,
			"crossDomain": true,
			"dataType": "jsonp",
			"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
			"method": "GET"
		};

		var capacity_settings = {
			"async" : settings.async,
			"crossDomain" : settings.crossDomain,
			"dataType" : "jsonp",
			"url" : settings.url,
			"method" : settings.method,
			"data" : {
				"url" : "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_production_capacity?$format=json"
			}
		};

		var rig_count_settings = {
			"async" : settings.async,
			"crossDomain" : settings.crossDomain,
			"dataType" : "jsonp",
			"url" : settings.url,
			"method" : settings.method,
			"data" : {
				"url" : "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_rig_count?$format=json"
			}
		};

		var tc_gas_settings = {
			"async" : settings.async,
			"crossDomain" : settings.crossDomain,
			"dataType" : "jsonp",
			"url" : settings.url,
			"method" : settings.method,
			"data" : {
				"url" : "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_top_gas_county?$format=json"
			}
		};

		var tc_oil_settings =  {
			"async" : settings.async,
			"crossDomain" : settings.crossDomain,
			"dataType" : "jsonp",
			"url" : settings.url,
			"method" : settings.method,
			"data" : {
				"url" : "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_top_oil_county?$format=json"
			}
		};

		var to_gas_settings = {
			"async" : settings.async,
			"crossDomain" : settings.crossDomain,
			"dataType" : "jsonp",
			"url" : settings.url,
			"method" : settings.method,
			"data" : {
				"url" : "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_top_gas_operator$format=json"
			}
		};

		var to_oil_settings = {
			"async" : settings.async,
			"crossDomain" : settings.crossDomain,
			"dataType" : "jsonp",
			"url" : settings.url,
			"method" : settings.method,
			"data" : {
				"url" : "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_top_oil_operator?$format=json"
			}
		};

		var permit_count_settings = {
			"async" : settings.async,
			"crossDomain" : settings.crossDomain,
			"dataType" : "jsonp",
			"url" : settings.url,
			"method" : settings.method,
			"data" : {
				"url" : "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_permit_count?$format=json"
			}
		};
		

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
					if (data.status.http_code !== 200) return;

					var prodCapData = {
						usProdCap: data.contents.elements.slice(0,1)
					};


					
					var highchart_series = [],
						oil_series = [],
						gas_series = [],
						// most recent month of data should be the last data point
						ordered_data = data.contents.elements.reverse();
						// return a max of six months of data
						ordered_data = ordered_data.slice(Math.max(ordered_data.length - 6, 0));

					$.each(ordered_data, function(){
						highchart_series.push(this.newboeproduction_mboeperday);
						oil_series.push(this.newoilproduction_mbblperday);
						gas_series.push(this.newgasproduction_bcfperday);
					});

					// chart series - total energy production
					var series_mboe = [
					    {
					    	name: 'MBOE',
							pointStart: Date.parse(ordered_data[0].rundatetime),
					    	data: highchart_series
					    }
					];

					prodCapData.usProdCapMboeChart = series_mboe;


					// chart series - oil vs gas production
					var series_oil_v_gas = [
						{
							name: 'Oil',
							pointStart: Date.parse(ordered_data[0].rundatetime),
							data: oil_series,
							yAxis: 0
						},
						{
							name: 'Gas',
							pointStart: Date.parse(ordered_data[0].rundatetime),
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

					var highchart_series = [];
					var ordered_data = data.contents.elements.reverse();

					$.each(ordered_data, function(){
						highchart_series.push(this.rig_count);
					});
					highchart_series = highchart_series.reverse();

					var series = [
					    {
					    	name: 'Rig Count',
					    	pointStart: Date.parse(ordered_data[0].rig_date),
					    	pointInterval: 24 * 3600 * 1000, // one day
					    	// return a max of thirty days of data
					    	data: highchart_series.slice(Math.max(highchart_series.length - 30, 0))
					    }
					];
					return series;
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
					
					$.each(data.contents.elements, function(){
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
					
					$.each(data.contents.elements, function(){
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
					
					$.each(data.contents.elements, function(){
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
					
					$.each(data.contents.elements, function(){
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

					var permitData = {};

					var highchart_series = [];
					var ordered_data = data.contents.elements.reverse();

					$.each(ordered_data, function(){
						highchart_series.push(this.rig_count);
					});
					highchart_series = highchart_series.reverse();

					var series = [
					    {
					    	name: 'Permit Count',
					    	pointStart: Date.parse(ordered_data[0].rig_date),
					    	pointInterval: 24 * 3600 * 1000, // one day
					    	// return a max of thirty days of data
					    	data: highchart_series.slice(Math.max(highchart_series.length - 30, 0))
					    }
					];

					permitData.chart = series;
					return permitData;
				}
			)
		});

		console.log(data);

		return data;
	}
});
