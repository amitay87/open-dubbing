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


