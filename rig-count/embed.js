(function(){
	'use strict';
	var frame = document.createElement('iframe');
	frame.src="index.html";
	frame.height=200;
	frame.width=450;
	frame.style.border=0;
	document.getElementById('drillinginfo').appendChild(frame);
})();