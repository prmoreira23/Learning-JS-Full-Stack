alert("JS CONNECTED!");

var option = prompt("What would you like to do?");
var todo_list = new Array

while(option !== "quit"){

	if(option === "new"){
		addTodo();
	} else if(option === "list"){
		listAllTodos();
	} else if(option === "delete"){
		deleteTodo();
	}

	option = prompt("What would you like to do?");
}

function addTodo(){
	var todo = prompt("Enter a new Todo");
	todo_list.push(todo);
	console.log("\""+todo+"\" has been added to the Todo list.");
}

function listAllTodos(){
	if(todo_list.length == 0){
		console.log("Empty todo list.");
	}else{
		console.log("************************************");
		todo_list.forEach(function(item, index){
			console.log(index+": "+item);
		});
		console.log("************************************");
	}
}

function deleteTodo(){
	var index = parseInt(prompt("Enter the index you want to delete:"));
	if(isNaN(index) || index < 0 || index > todo_list.length - 1){
		console.log("Invalid index..");
	} else{
		console.log("\""+todo_list[index]+"\" has been deleted succesfully.");	
		todo_list.splice(index, 1);
	}
}

console.log("Quitting system...");