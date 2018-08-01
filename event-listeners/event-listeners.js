// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg','secondimg.jpeg','thirdimg.jpeg','fourthimg.jpeg','fifthimg.jpeg'];
var currentIndex = 0;


//function chnageBackground()
//document.body.style.backgroundcolor=color


function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }

  // YOUR TASK: Finish this function!
}

function promptcolor(){
	var color=prompt("choose a color");
	var bodycolor =document.getElementsByTagName('body');
	bodycolor[0].style.backgroundColor=color;
}