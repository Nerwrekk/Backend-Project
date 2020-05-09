
function editText(labelText) {
    const originalText = labelText.textContent;
    labelText.textContent = "";
    const parent = labelText.parentElement.parentElement;
    parent.classList.add("editing");
    const editInput = parent.querySelector(".edit");;
    editInput.focus();

    editInput.addEventListener("keypress", function() {
        let key = event.keyCode;
        if (key === 13) {
            //check first that todoInput is not empty
            if (editInput.value == "") {return};

            //make also sure that the todoInput value is not just a bunch of whitespace
            let whitespaceString = editInput.value;
            if (whitespaceString.trim() == 0) {
                return;
            }

            editInput.blur();
            labelText.textContent = editInput.value;
            parent.classList.remove("editing");
        }
    });
    
    editInput.addEventListener("blur", function() {
        let whitespaceString = editInput.value;
        if ((editInput.value == "") || (whitespaceString.trim() == 0)) {
            //destroyTodoWithEdit is in js file 'removeTodo'
            destroyTodoWithEdit(parent);
        } else {
            editInput.blur();
            labelText.textContent = editInput.value;
            parent.classList.remove("editing");
        }
    });
}


