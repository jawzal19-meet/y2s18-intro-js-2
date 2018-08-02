// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg','secondimg.jpeg','thirdimg.jpeg','fourthimg.jpeg','fifthimg.jpeg'];
var currentIndex = 0;




function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  var newpicture=document.getElementsByTagName('img')
  newpicture[0].src=pictures[currentIndex];
  }
document.getElementsByTagName("img")[0].addEventListener("click", function (event) {showNextPicture();})

