import Ember from 'ember';
import ENV from 'diindex-ember-dev/config/environment';

export default Ember.Controller.extend({
	isProduction: Ember.computed(
		function() {
			return (ENV.environment === 'production');
		}
	)
});