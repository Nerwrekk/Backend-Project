
function destroyTodo(pressedDestroyButton) {
    destroyedTodo = pressedDestroyButton.parentElement.parentElement;
    destroyedTodo.remove();
    delete destroyedTodo;

    //make sure we update the todoCount
    updateTodoCount();
}

function destroyTodoWithEdit(elementParent) {
    elementParent.remove();
    delete elementParent;
    
    //make sure we update the todoCount
    updateTodoCount();
}