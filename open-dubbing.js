console.log("AAA hello!!!")
document.body.style.border = "30px solid blue";
// var audio = new Audio('audio/cleaning_machine_heb.mp3');
console.log("AAA before playing");

if (confirm('Are you sure you want to play the dub?')) {
  // Play it!
  	var audio = new Audio('https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3');
	audio.play();
	console.log("AAA after playing");
} else {
  // Do nothing!
  console.log('AAA Nothing was done');
}

// ==================================================

// identify an element to observe
function subscribeObserver(){
	timeRemainingElement = window.document.querySelectorAll('[data-uia="controls-time-remaining"]')[0]; //.children[0];

	// get time remaining:



	// create a new instance of 'MutationObserver' named 'observer', 
	// passing it a callback function
	observer = new MutationObserver(function(mutationsList, observer) {
	    console.log(mutationsList);
    	timeRemainingText = timeRemainingElement.innerHTML

		console.log(timeRemainingElement);
		console.log(timeRemainingText);
	});

	// call 'observe' on that MutationObserver instance, 
	// passing it the element to observe, and the options object
	observer.observe(timeRemainingElement, {characterData: true, childList: true, attributes: true, subtree: true});
}

setTimeout(subscribeObserver, 5000);