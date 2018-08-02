// Put all your JavaScript in this file!
function backgroundcolor(){
	var color= prompt("choose a color");
	var body=document.getElementsByTagName('body');
	body[0].style.backgroundColor=color;
}

value=0;
function addvalue(){
	value++;
}

function value0(){
	value=0;
}


var colors=[red,yellow,green,blue,purple];
var currentcolor=0;
function backgroundcycles(){
	currentcolor++
	if(currentcolor>=5){
		var body=document.getElementsByTagName('body');
		body[0].style.backgroundColor=colors.currentcolor;
}
}