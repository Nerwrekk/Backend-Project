function completedTodo(toggleButton) {
    const parent = toggleButton.parentElement.parentElement;
    //in case you re-click the toggle checkbox we undo the completed action
    toggleButton.checked ? parent.classList.add("completed") : parent.classList.remove("completed");

    //update the todo count
    updateTodoCount();
}

function clearAllCompletedTodos() {
    //get all todos
    const everyTodo = Array.from(document.querySelector(".todo-list").querySelectorAll("li"));

    //filter out all the completed todos 
    const completedTodos = everyTodo.filter(t => t.classList.contains("completed"));

    //remove the completed todos
    completedTodos.forEach(ct => {
        ct.remove();
        delete ct;
    });

    //check if we still have any todos, if we don't we hide the 'complete-all' button
    hideOrShowCompleteAllbutton();

    //update todos
    updateTodoCount();
}

function makeAllTodosCompleted() {
    //get all todos
    const everyTodo = Array.from(document.querySelector(".todo-list").querySelectorAll("li"));
    //get complete-all button
    const completeAllButton = document.querySelector("#complete-all");

    const completedTodos = everyTodo.filter(t => t.classList.contains("completed"));

    //first check if all todos are completed, then we want to un-complete them all
    if (everyTodo.length == completedTodos.length) {
        everyTodo.forEach(t => {
            t.classList.remove("completed");
            //uncheck all the checkboxes
            t.querySelector(".toggle-complete").checked = false;
        });

        //make the complete-all button unchecked
        completeAllButton.checked = false;
    }
    //else if there is todos that are not yet completed we complete them first
    else {
        everyTodo.forEach(t => {
            if (!(t.classList.contains("completed"))) {
                t.classList.add("completed");
                t.querySelector(".toggle-complete").checked = true;
            }
        });

        //make the complete-all button checked
        completeAllButton.checked = true;
    }
   
    updateTodoCount();
}


function hideOrShowCompleteAllbutton() {
   //get all todos
   const everyTodo = Array.from(document.querySelector(".todo-list").querySelectorAll("li"));
   //get complete-all button
   const completeAllButtonLabel = document.querySelector("#complete-all").nextSibling.nextSibling;
   //completed todos
   const completedTodos = everyTodo.filter(t => t.classList.contains("completed"));
   //get complete-all button
   const completeAllButton = document.querySelector("#complete-all");

    if (everyTodo.length == 0) {
        completeAllButtonLabel.classList.add("hidden");
    }
    else {
        completeAllButtonLabel.classList.remove("hidden");
    }

    if (everyTodo.length - completedTodos.length > 0) {
        completeAllButton.checked = false;
    } 
    else {
        completeAllButton.checked = true;
    }
}

function showTheRightTodos() {
    const everyTodo = Array.from(document.querySelector(".todo-list").querySelectorAll("li"));
    //get the selected link
    selectedLink = document.querySelector(".selected");

    if (selectedLink.classList.contains("a-completed")) {
        everyTodo.forEach(t => {
            if (!(t.classList.contains("completed"))) {
                t.classList.add("hidden")
                //deactivate the destroy button
                t.querySelector("#destroy").classList.remove("destroy");
            }
            else {
                t.classList.remove("hidden");
                //activate the destroy button again
                t.querySelector("#destroy").classList.add("destroy");
            }
        });
    }
    
    if (selectedLink.classList.contains("a-active")) {
        everyTodo.forEach(t => {
            if (t.classList.contains("completed")) {
                t.classList.add("hidden")
                //deactivate the destroy button
                t.querySelector("#destroy").classList.remove("destroy");
            }
            else {
                t.classList.remove("hidden");
                //activate the destroy button again
                t.querySelector("#destroy").classList.add("destroy");
            }
        });
    }
}