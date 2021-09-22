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
function subscribeObservers(){
	console.log("AAA subscribing observers...");
	timeRemainingElement = window.document.querySelectorAll('[data-uia="controls-time-remaining"]')[0]; //.children[0];

	// get time remaining:




	// create a new instance of 'MutationObserver' named 'observer', 
	// passing it a callback function
	timeElementObserver = new MutationObserver(function(mutationsList, timeElementObserver) {
	    // console.log(mutationsList);
    	timeRemainingText = timeRemainingElement.innerHTML

		// console.log(timeRemainingElement);

		console.log(timeRemainingText);
	});

	// call 'observe' on that MutationObserver instance, 
	// passing it the element to observe, and the options object
	timeElementObserver.observe(timeRemainingElement, {characterData: true, childList: true, attributes: true, subtree: true});


	var playPauseElement = window.document.querySelectorAll('button.rtl-1enhvti')[1]; //'div.control-medium')[0].children[0].children[0];
	console.log(playPauseElement);
		playPauseObserver = new MutationObserver(function(mutationsList, playPauseObserver) {
	    console.log(mutationsList);
    	playPauseText = playPauseElement.innerHTML
    console.log("AAA play/pause button status was changed");
		console.log(playPauseElement);

		console.log(playPauseText);
	});

	// call 'observe' on that MutationObserver instance, 
	// passing it the element to observe, and the options object
	playPauseObserver.observe(playPauseElement, {characterData: true, childList: true, attributes: true, subtree: true});



}

setTimeout(subscribeObservers, 10000);

// press the 'E' key:

var keyboardEvent = document.createEvent('KeyboardEvent');
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent';


window.addEventListener('keydown', (e) => {
  console.log(e)
  // var event = e;
})

function dispatch(){
	// document.dispatchEvent(keyboardEvent);
	// console.log("AAA clicking the element...");
	var element = document.querySelector('div.rtl-fntwn3');

	// var event = new KeyboardEvent('keydown', {
 //  	'key': 'a',
	// })

var event = new MouseEvent('mouseover', {
  'view': window,
  'bubbles': true,
  'cancelable': true
});

	// event.target = element;
	// element.click(); // dispatchEvent(event);
	element.dispatchEvent(event);
	// console.log("AAA element clicked");
}
setInterval(dispatch, 1000)