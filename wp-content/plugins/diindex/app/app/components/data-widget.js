import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['data-widget-wrapper'],
	dateToBottom: Ember.computed(
		function() {
			var widgetOptions = this.get('widgetOptions');
			return (widgetOptions.datePosition == 'bottom');
		}
	)
});
