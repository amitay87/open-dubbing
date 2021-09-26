function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}



// ==================================



console.log("AAA hello!!!")
document.body.style.border = "30px solid blue";
// var audio = new Audio('audio/cleaning_machine_heb.mp3');
console.log("AAA before playing");
if (confirm('Are you sure you want to play the dub?')) {
  // Play it!
  	var audioUrl = prompt("Please enter URL of dubbing audio for this video", 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3');
  	var audio = new Audio(audioUrl);
  	// var videoDurationStr = prompt("Please enter the video duration (hh:mm:ss");
  	// var datetime = new Date('1970-01-01T' + videoDurationStr + 'Z');
  	// var videoDuration = datetime.getTime()/1000;
  	// var videoDuration = null;
  	waitForElementToDisplay("div[data-uia=timeline]",
  		function() {
  			console.log("element found!"); 
  			// const timelineElement = window.document.querySelectorAll('div[data-uia=timeline]')[0];
  			// videoDuration = timelineElement.getAttribute('max')/1000; 
  			// console.log("videoDuration after element found: " + videoDuration);   	
  			
				// audio.play();
				setTimeout(subscribeObservers, 10);
			},
			1000,9000);
  // 	const timelineElement = window.document.querySelectorAll('div[data-uia=timeline]')[0];
		// const videoDuration = timelineElement.getAttribute('max')/1000;
  	// console.log("videoDuration: " + videoDuration)
  	// TODO: add a regex for validation and cleaner parsing
  	// var videoDurationMinutes = videoDurationStr.substring(0,2);


	// console.log("AAA after playing");
} else {
  // Do nothing!
  console.log('AAA Nothing was done');
}

// ==================================================




// identify an element to observe
function subscribeObservers(){
	console.log("AAA subscribing observers... ");
	timeRemainingElement = window.document.querySelectorAll('[data-uia="controls-time-remaining"]')[0]; //.children[0];
	console.log("AAA timeRemainingElement: " + timeRemainingElement);
	// get time remaining:




	// create a new instance of 'MutationObserver' named 'observer', 
	// passing it a callback function
	timeElementObserver = new MutationObserver(function(mutationsList, timeElementObserver) {
	    // console.log(mutationsList);
	    const timelineElement = window.document.querySelectorAll('div[data-uia=timeline]')[0];
  		videoDuration = timelineElement.getAttribute('max')/1000; 
  		console.log("AAA videoDuration: " + videoDuration);
    	timeRemainingText = timeRemainingElement.innerHTML
    		console.log("AAA timeRemainingText: " + timeRemainingText);

    	// console.log(timeRemainingText);
    	if (timeRemainingText.length == 4) {timeRemainingText = '0' + timeRemainingText};
    	var timeRemaining = new Date('1970-01-01T' + '00:' + timeRemainingText + 'Z').getTime()/1000;
    	console.log(timeRemaining);
		// console.log(timeRemainingElement);
			console.log("AAA time remaining: " + timeRemaining + ". videoDuration: " + videoDuration);
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
    // console.log("AAA playPauseElement.getAttribute('aria-label'): " + playPauseElement.getAttribute('aria-label'));
    console.log("AAA playPauseElement.getAttribute('aria-label'): " + playPauseElement.getAttribute('data-uia'));
    // console.log("AAA!!! " + playPauseElement.getAttribute('aria-label') == "הפעל");
    if (playPauseElement.getAttribute('data-uia') == "control-play-pause-play"){
    	console.log("AAA detected control-play-pause-play. pausing...");
    	console.log("AAA audio: " + audio);
    	audio.pause();
    } else if (playPauseElement.getAttribute('data-uia') == "control-play-pause-pause"){
    	console.log("AAA detected control-play-pause-pause. playing...");
    	console.log("AAA audio: " + audio);
    	// audio.currentTime = videoDuration - remainingTime;
    	console.log("audio currentTime: " + audio.currentTime)

    	audio.play();
    } else {
    	console.log("AAA not detected...");	
    }
        
		console.log(playPauseElement);

		console.log(playPauseText);
	});

	// call 'observe' on that MutationObserver instance, 
	// passing it the element to observe, and the options object
	playPauseObserver.observe(playPauseElement, {characterData: true, childList: true, attributes: true, subtree: true});



}



// press the 'E' key:

// var keyboardEvent = document.createEvent('KeyboardEvent');
// var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent';


// window.addEventListener('keydown', (e) => {
//   console.log(e)
//   // var event = e;
// })

// function dispatch(){
// 	// document.dispatchEvent(keyboardEvent);
// 	// console.log("AAA clicking the element...");
// 	var element = document.querySelector('div.rtl-fntwn3');

// 	// var event = new KeyboardEvent('keydown', {
//  //  	'key': 'a',
// 	// })

// var event = new MouseEvent('mouseover', {
//   'view': window,
//   'bubbles': true,
//   'cancelable': true
// });

// 	// event.target = element;
// 	// element.click(); // dispatchEvent(event);
// 	element.dispatchEvent(event);
// 	// console.log("AAA element clicked");
// }
// setInterval(dispatch, 1000)