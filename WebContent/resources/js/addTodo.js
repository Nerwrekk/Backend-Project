
//get the todo-input so we can make new todos
const todoInput = document.querySelector(".new-todo");

//get the list that makes us able to write a task
const todoTemplate = document.querySelector(".todo-list").firstChild.nextSibling;

//remove the default list
todoTemplate.remove();

//when entering a new todo
function addTask(event) {
    
    //it only works if we press enter otherwise leave
    if (!(event.keyCode === 13)) {return}

            //check first that todoInput is not empty
            if (todoInput.value == "") {return};

            //make also sure that the todoInput value is not just a bunch of whitespace
            let whitespaceString = todoInput.value;
            if (whitespaceString.trim() == 0) {
                return;
            }

    const keyTest = event.keyCode;

    //cancel the default action
    event.preventDefault();
    //copy todoTemplate
    const newTodo = todoTemplate.cloneNode(true);
    //get the label
    const todoLabel = newTodo.querySelector("label");
    //get the edit input
    const editInput = newTodo.querySelector(".edit");
    //make so the label has the same text as the input
    todoLabel.textContent = todoInput.value;
    //make the edit value the same as the label
    editInput.value = todoInput.value;
    //make input value empty
    todoInput.value = ""; 

    //create the new todo task
    document.querySelector(".todo-list").appendChild(newTodo);

    //add the todo to the todo-count
    updateTodoCount();
     
}