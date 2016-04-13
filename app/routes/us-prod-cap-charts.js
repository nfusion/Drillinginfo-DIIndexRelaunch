import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var mboe_settings = {
			"async": true,
			"crossDomain": true,
			"dataType": "jsonp",
			"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
			"data": {
				"url" : "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_production_capacity?$format=json"
			},
			"method": "GET"
		};

		var rig_settings = {
			"async": true,
			"crossDomain": true,
			"dataType": "jsonp",
			"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
			"data": {
				"url" : "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_rig_count?%24format=json"
			},
			"method": "GET"
		};

		return new Ember.RSVP.hash({

			mboe: $.ajax(mboe_settings).then(

				function(data){
					var highchart_series = [];
					var ordered_data = data.contents.elements.reverse();

					$.each(ordered_data, function(){
						highchart_series.push(this.newboeproduction_mboeperday);
					});

					highchart_series = highchart_series.reverse();

					var series = [
					    {
					    	pointStart: Date.parse(ordered_data[0].rundatetime),
					    	// return a max of seven months of data
					    	data: highchart_series.slice(Math.max(highchart_series.length - 7, 0))
					    }
					];
					return series;
				}
			),

			rigCount: $.ajax(rig_settings).then(

				function(data){
					console.log(data);
					var highchart_series = [];
					var ordered_data = data.contents.elements.reverse();

					$.each(ordered_data, function(){
						highchart_series.push(this.rig_count);
					});
					highchart_series = highchart_series.reverse();

					var series = [
					    {
					    	pointStart: Date.parse(ordered_data[0].rig_date),
					    	pointInterval: 24 * 3600 * 1000, // one day
					    	// return a max of thirty days of data
					    	data: highchart_series.slice(Math.max(highchart_series.length - 30, 0))
					    }
					];
					return series;
				}
			)
		});
	}
});
