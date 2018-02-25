function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i])
	}
}

printReverse([3,2,6,5]);

function isUniform(arr){
	var first = arr[0];
	return arr.join("").split(first).join("").length == 0;
}

console.log([1,1,1,1,1,1,1], isUniform([1,1,1,1,1,1,1]));
console.log([1,1,1,7,1,1,1], isUniform([1,1,1,7,1,1,1]));

function sumArray(arr){
	return eval(arr.join("+"));
}
console.log([1,1,1], sumArray([1,1,1]))
console.log([5,10,15], sumArray([5,10,15]))

function max(arr){
	var max = null;
	arr.forEach(function(ea){
		if(ea > max){
			max = ea;
		}
	});
	return max;
}

console.log([6,4,6,8,1,1,1], max([6,4,6,8,1,1,1]))
console.log([5,10,15], max([5,10,15]))
