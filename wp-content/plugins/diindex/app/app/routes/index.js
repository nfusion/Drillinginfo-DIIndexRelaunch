import Ember from 'ember';


export default Ember.Route.extend({
	model: function() {
		var settings = {
			"async": true,
			"crossDomain": true,
			"dataType": "jsonp",
			"url": "wp-content/plugins/diindex/diindex-proxy.php",
			"method": "GET"
			/*
			"contentType": "text/plain",
			xhrFields: {
			    // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
			    // This can be used to set the 'withCredentials' property.
			    // Set the value to 'true' if you'd like to pass cookies to the server.
			    // If this is enabled, your server must respond with the header
			    // 'Access-Control-Allow-Credentials: true'.
			    withCredentials: false
			},

			headers: {
			    // Set any custom headers here.
			    // If you set any non-simple headers, your server must include these
			    // headers in the 'Access-Control-Allow-Headers' response header.
			    "X-API-KEY": "d06a6c14d099e2bb966e821c58210580"
			} */
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
		
		function diffDate(fromDate, toDate) {

			toDate = toDate || new Date();

			fromDate = fromDate.getTime();
			toDate = toDate.getTime();

			var diffDate = Math.round( (toDate - fromDate) / 1000 / 60 / 60 / 24 );

			// return no data if it's more than 75 days old.
			//console.log('diffDate',diffDate);

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
					var runDate = new Date(data.contents.elements[0].rundatetime);

					var oldData = diffDate(runDate);

					if (oldData) return;
					
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
							pointStart: new Date(ordered_data[0].rundatetime).getTime(),
					    	data: highchart_series
					    }
					];

					prodCapData.usProdCapMboeChart = series_mboe;


					// chart series - oil vs gas production
					var series_oil_v_gas = [
						{
							name: 'Oil',
							pointStart: new Date(ordered_data[0].rundatetime).getTime(),
							data: oil_series,
							yAxis: 0
						},
						{
							name: 'Gas',
							pointStart: new Date(ordered_data[0].rundatetime).getTime(),
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
				    	// return a max of thirty days of data
						ordered_data = ordered_data.slice(Math.max(highchart_series.length - 30, 0));

					$.each(ordered_data, function(){
						highchart_series.push(this.rig_count);
					});
					highchart_series = highchart_series.reverse();

					var series = [
					    {
					    	name: 'Rig Count',
					    	pointStart: new Date(ordered_data[0].rig_date).getTime(),
					    	pointInterval: 24 * 3600 * 1000, // one day
					    	data: highchart_series
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
					console.log(data);
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

					var runDate = new Date(data.contents.elements[0].year, data.contents.elements[0].month-1);
					var oldData = diffDate(runDate);

					if (oldData) return;

					var permitData = {};

					var highchart_series = [];
					// most recent month of data should be the last data point
					var ordered_data = data.contents.elements.reverse();
					// return a max of six months of data
					ordered_data = ordered_data.slice(Math.max(ordered_data.length - 6, 0));

					$.each(ordered_data, function(){
						highchart_series.push(this.permit_count);
					});
					highchart_series = highchart_series.reverse();

					var series = [
					    {
					    	name: 'Permit Count',
					    	pointStart: new Date(ordered_data[0].year, ordered_data[0].month-1).getTime(),
					    	data: highchart_series
					    }
					];

					permitData.chart = series;
					return permitData;
				}
			)
		});

		//console.log(data);

		return data;
	}
});
