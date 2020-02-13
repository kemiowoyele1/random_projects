

var todo = [];

function Todo(name) {
	this.name = name;
	this.completed = false;
}


// Add New Todo
function addNewTodoWithName(name){
	var t = new Todo(name);
	todos.push(t);
}

// Remove todo
function removeTodoAtIndex(index){
	todos.splice(index, 1);
}

// Get Todo
function getTodoAtIndex(index) {
	return todos[index];
}

//List Todos
function listTodos() {
	var html = "";
	for (var i in todos){
		//console.log(todos[i].name);
		var todo = todos[i];
		var name = todo.name;
		var completed = todo.completed;
		html += "<li>"+name+ "<span>"+ completed+"</span></li>"
	}
	$("#list-todos").html(html);
}


$("add-todo-form").submit(function(event){
	event.preventDefault(); // prevents the default behavior!

	var name = $("#todo-name").val();
	//validate..
	addNewTodoWithName(name);
	listTodos();
});