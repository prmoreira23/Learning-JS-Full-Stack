var age = prompt("What's your age: ");
age = parseInt(age);
if(isNaN(age) || age < 0){
	console.log("Age must be a positive integer.");
} else {
	var days = age * 365.25;
	console.log("Your age is the same as " + days);
	if(age === 21){
		console.log("Happy 21st birthday!!");
	}
	if(age % 2 !== 0){
		console.log("Your age is odd!");
	}
	if(age % Math.sqrt(age) === 0){
		console.log("Your age is a perfect square.");
	}
}