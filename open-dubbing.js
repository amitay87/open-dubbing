console.log("AAA hello!!!")
document.body.style.border = "30px solid blue";
// var audio = new Audio('audio/cleaning_machine_heb.mp3');
console.log("AAA before playing");
if (confirm('Are you sure you want to play the dub?')) {
  // Play it!
  	var audioUrl = prompt("Please enter URL of dubbing audio for this video", 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3');
  	var videoDurationStr = prompt("Please enter the video duration (hh:mm:ss");
  	var datetime = new Date('1970-01-01T' + videoDurationStr + 'Z');
  	var videoDuration = datetime.getTime()/1000;
  	console.log("videoDuration: " + videoDuration)
  	// TODO: add a regex for validation and cleaner parsing
  	// var videoDurationMinutes = videoDurationStr.substring(0,2);

  	var audio = new Audio(audioUrl);
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
    	console.log(timeRemainingText);
    	var timeRemaining = new Date('1970-01-01T' + '00:' + timeRemainingText + 'Z').getTime()/1000;
    	console.log(timeRemaining);
		// console.log(timeRemainingElement);
			var elapsedTime = videoDuration - timeRemaining
			console.log("elapsedTime: " + elapsedTime)
			console.log("audio currentTime: " + audio.currentTime)
			if (Math.abs(elapsedTime - audio.currentTime) > 2) {
				console.log("abs(elapsedTime - audio.currentTime) > 1");
				audio.currentTime = elapsedTime;

			}
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
    if (playPauseElement.getAttribute('aria-label') == "הפעל"){
    	audio.pause();
    } else if (playPauseElement.getAttribute('aria-label') == "השהה"){
    	audio.currentTime = videoDuration - remainingTime;
    	audio.play();
    }
        
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