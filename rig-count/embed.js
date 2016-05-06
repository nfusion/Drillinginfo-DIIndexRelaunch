(function(){
	'use strict';
	var script_self = document.getElementById('di-embed');
	var filepath = script_self.src.slice(0,script_self.src.lastIndexOf('/')+1);
	var frame = document.createElement('iframe');
	frame.src= filepath + "index.html";
	frame.height=200;
	frame.width=450;
	frame.style.border=0;
	document.getElementById('drillinginfo').appendChild(frame);
})();