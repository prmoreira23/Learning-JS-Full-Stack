var displayPlayer1 = document.querySelector("#player1display");
var displayPlayer2 = document.querySelector("#player2display");

var buttonPlayer1 = document.querySelector("#player1");
var buttonPlayer2 = document.querySelector("#player2");
var buttonReset = document.querySelector("#reset");

var timesSelect = document.querySelector("input[type=number]");
var maxPlays = document.querySelector("#maxPlays");

var times = 5;
var player1 = 0;
var player2 = 0;
var gameOver = false;

buttonPlayer1.addEventListener("click", function(){
	if(!gameOver){
		if(++player1 >= times){
			gameOver = true;
			displayPlayer1.classList.add("winner");
		}
		displayPlayer1.textContent = player1;
	}
});

buttonPlayer2.addEventListener("click", function(){
	if(!gameOver){
		if(++player2 >= times){
			gameOver = true;
			displayPlayer2.classList.add("winner");
		}
		displayPlayer2.textContent = player2;
	}
});

buttonReset.addEventListener("click", reset);

timesSelect.addEventListener("change", function(){
	times = parseInt(this.value);
	if(times <= 0){
		times = 1;
		this.value = times;
	}
	
	maxPlays.textContent = times;
	reset();
});

function reset(){
	gameOver = false;
	player1 = 0;
	player2 = 0;
	displayPlayer1.textContent = player1;
	displayPlayer2.textContent = player2;
	displayPlayer1.classList.remove("winner");
	displayPlayer2.classList.remove("winner");
}

