
function updateTodoCount() {
    const everyTodo = Array.from(document.querySelector(".todo-list").querySelectorAll("li"));
    const todoCount = document.querySelector(".todo-count");
    const strongElement = todoCount.querySelector("strong");

    //now that we have atleast 1 todo we can activate the option menu and then check if we have any todos or not
    const footerMenu = document.querySelector(".footer");
    if (footerMenu.classList.contains("hidden") && everyTodo.length > 0) {
        footerMenu.classList.remove("hidden");
    }
    else if (everyTodo.length < 1) {
        footerMenu.classList.add("hidden");
    }

    //check to see if we need to show or hide the complete-all button
    hideOrShowCompleteAllbutton();

    //we need to filter out all the completed todos 
    const completedTodos = everyTodo.filter(t => t.classList.contains("completed"));

    //if any completed todos exist we remove the hidden class from the 'clear-completed button'
    const clearButton = document.querySelector(".clear-completed");
    if (completedTodos.length > 0) {
        if(clearButton.classList.contains("hidden")) {
            clearButton.classList.remove("hidden")
        }
    }
    //else if we have no completed todos we hide the clear-completed button again
    else {
        clearButton.classList.add("hidden")
    }

    //now we remove the completed todos from the list so we only have the active ones left
    const activeTodos = everyTodo.length - completedTodos.length;

    //set the strong elements text content to show all the active todos
    strongElement.textContent = activeTodos;

    //can be found in the completedTodo.js
    showTheRightTodos();
}
