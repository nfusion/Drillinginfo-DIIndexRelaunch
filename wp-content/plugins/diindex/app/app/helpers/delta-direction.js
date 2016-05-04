import Ember from 'ember';

export function deltaDirection(params/*, hash*/) {
	var output = '';
	if (params > 0) {
		return '<span class="inc">' + params + '%</span>';
	}

	return '<span class="dec">' + params + '%</span>';
}

export default Ember.Helper.helper(deltaDirection);
