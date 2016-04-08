/* globals $ */
import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var settings = {
			"async": true,
			"crossDomain": true,
			"dataType": "jsonp",
			"url": "http://local.drillinginfo.nfusion.com/wp-content/plugins/drillinginfo/diindex-proxy.php",
			"data": {
				"url" : "http://api-mgmt.dev.drillinginfo.com/v1/diindex/media_production_capacity?$format=json"
			},
			"method": "GET"
		};

		return $.ajax(settings).then(function(data){return data.contents.elements;});
	}
});