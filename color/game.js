var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var button = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	
	button.addEventListener("click", function(){
		reset();
	});

	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		paintSquares();
		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor === pickedColor){
				message.textContent = "Correct!";
				button.textContent = "Play Again?";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
			} else {
				this.classList.add("hidden");
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again!";
			}
		});
	}
}

function reset(){
	colors = generateColorArray(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	button.textContent = "New Colors";
	paintSquares();
	message.textContent = "";
	h1.style.backgroundColor = "steelBlue";
}

function paintSquares(){
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateColor(){
	return "rgb("+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")";
}

function generateColorArray(size){
	arr = [];
	for(var i = 0; i < size; i++){
		arr.push(generateColor());
	}
	return arr;
}






// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numberOfSquares = 3;
// 	colors = generateColorArray(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.backgroundColor = "steelBlue";
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numberOfSquares = 6;
// 	colors = generateColorArray(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.backgroundColor = "steelBlue";
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });
