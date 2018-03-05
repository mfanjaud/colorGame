var numSquares = 6;
var colors = [];
var pickedColor;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;

function init(){
 
	setupModeButtons();

	setupSquares();

	reset();
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Color";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		} 
	}
	h1.style.backgroundColor = "#C88691";
}


function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for (var i = 0; i < num ; i++) {
		// get random color and push into arr
		arr.push(randomColor())

	}

	return arr;
}

function randomColor () {
	//pick R from 0 to 255
	var r = Math.floor(Math.random() * 255)
	//pick G from 0 to 255
	var g = Math.floor(Math.random() * 255)
	//pick B from 0 to 255
	var b = Math.floor(Math.random() * 255)
	return "rgb(" + r +", " + g +", " + b + ")";
}

function setupModeButtons(){
		for (var i = 0; i < modeButtons.length; i++) {
		 	modeButtons[i].addEventListener("click", function(){
		 		modeButtons[0].classList.remove("selected");
		 		modeButtons[1].classList.remove("selected");
		 		this.classList.add("selected");
		 		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

		 		reset();
		 	});
		}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		// add click listeners to squares 
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare it to pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{
				this.style.backgroundColor = "transparent";
				messageDisplay.textContent = "Try Again";
						}
		});
	}
}