alert("CONNECTED!");

function Friend(name, age, isCool){
	this.name = name;
	this.age = age;
	this.isCool = isCool;

	this.print = function(){
		console.log(this.name+":: "+this.age);
	};
};

friends = [new Friend("Pablo", 27, true), new Friend("Rodrigo", 35, false)];