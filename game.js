var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Color";
	for (var i = 0; i < squares.length; i++) {
	 squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#C88691";
})

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})


colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
	// add initial color to squares
	squares[i].style.backgroundColor = colors[i];
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
