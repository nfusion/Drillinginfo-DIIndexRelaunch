import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function(){
		var componentSelector = '#' + this.elementId,
			panels = $('.toggle-panel', componentSelector);
		// setup
		panels.filter('[data-display="hidden"]').hide();

		// toggle control
		$('.switch-input', componentSelector).on('change',function(e){
			panels.toggle('fast');
		});
	}
});
