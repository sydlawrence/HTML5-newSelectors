// define the variables
var btn, content;

// when loaded
window.onload = function() {

	// check browser support
	if (typeof document.querySelector != "function") {
	
		// display error for lack of support
		alert('Your browser does not support the querySelector function');
	
	}

	// get the elements
	btn = document.querySelector("button.btn");
	content = document.querySelector("#content");
		
	// listen for click on button
	btn.onclick = function() {
		
		// set the background colour
		content.style.background = '#f00';
	
	};
	
};
