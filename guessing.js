alert("Guessing Game starting off...");

var secretNumber = Math.floor(Math.random() * 1000);
console.log("Generated number is: "+secretNumber);
var count = 0;

while(true){
	var guess = parseInt(prompt("Attempt number "+(count+1)+"\nGuess a number: "));
	if(isNaN(guess)){
		continue;
	} else {
		if(guess === secretNumber){
			alert("Congratulations! You WON!!!!\nIt took you "+(count+1)+" attempts to guess right.");
			break;
		} else if(guess > secretNumber) {
			alert("Not quit right! You guessed too high. Try again!");
		} else {
			alert("Not quit right! You guessed too low. Try again!");
		}
	}
	count++;
}