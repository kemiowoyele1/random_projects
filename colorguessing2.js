var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector('h1');
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
     modeButtons[0].classList.remove("selected");
     modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

       reset();
   }); 
  }

function reset(){
colors = generateRandomColors(numSquares);
	//pick a new function from the array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = ""; 
	resetButton.textContent = "NEW COLORS";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
        if(colors[i]){
        squares[i].display = "block";
		squares[i].style.background = colors[i];
	}else{
		squares[i].style.display = "none";
	}
	h1.style.background = "RGB(7, 166, 144) ";

}
    // if(this.textContent === "easy"{
      // 	numSquares = 3;
      // } else {
      // 	numSquares = 6;  
     //figure out how many squares to show
     //pick new colors
     //pick a new picked color
     //update page to reflect changes  

/* easyBtn.addEventListener("click", function(){
 	hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numSquares = 3;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
 	if(colors[i]){
 		squares[i].style.background = colors[i]; 
 	}else {
 		squares[i].style.display = "none";
 	}
 }
});

hardBtn.addEventListener("click", function(){
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");
numSquares = 6;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
 		squares[i].style.background = colors[i]; 
 		squares[i].style.display = "block";
 }
 });
*/
resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new function from the array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = ""; 
	this.textContent = "NEW COLORS";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "RGB(7, 166, 144) ";
})
  

colorDisplay.textContent = pickedColor;

for (var i = 0 ; i < squares.length; i++) {
	//add initial colors to squares
 squares[i].style.background = colors[i];

 //add click listeners to squares
 squares[i].addEventListener("click", function(){

 	//grab color of clicked square
    var clickedColor = this.style.background;
 	//compare color to pickedColor
 	if(clickedColor === pickedColor){
 		changeColors(clickedColor);
 		resetButton.textContent = "play again?"

 		h1.style.background = clickedColor; 
    messageDisplay.textContent = "correct";
 } else {
 	this.style.background = "rgb(98, 243, 222) ";
 	messageDisplay.textContent = "try again";
 }
 });
 
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}
}           
 function pickColor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
//get random color and push into array 
   arr.push(randomColor())

	}
	//return that array
	return arr;
}

function randomColor() {
	// pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
