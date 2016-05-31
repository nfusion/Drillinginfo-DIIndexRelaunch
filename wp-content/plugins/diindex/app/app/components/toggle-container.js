import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['toggle-container-wrapper'],
	didInsertElement: function(){
		var componentSelector = '#' + this.elementId,
			panels = $('.toggle-panel', componentSelector),
			labels = $('[data-toggle-label]', componentSelector);
		// setup
		panels.filter('[data-display="hidden"]').hide();

		// toggle control
		$('.switch-input', componentSelector).on('change',function(e){
			panels.toggle('fast');
			labels.toggleClass('active');
		});
	}
});
