//start by making the show all todos selected
showAllTodos(getAllOptionLinks()[0]);

function showAllTodos(pressedLink) {
    const allTodos = getTodoList();

    allTodos.forEach(t => {
        if (t.classList.contains("hidden")) {
            t.classList.remove("hidden");
            //activate the remove button on the todos we show
            t.querySelector("button").classList.add("destroy");
        }
    });

    showSelectedLink(pressedLink);
}

function showCompletedTodos(pressedLink) {
    const allTodos = getTodoList();

    allTodos.forEach(t => {
        if (!(t.classList.contains("completed"))) {
            t.classList.add("hidden");
            //we also disable the removeButton on the todos that are not visible
            t.querySelector("button").classList.remove("destroy");
        }

        if (t.classList.contains("completed") && t.classList.contains("hidden")) {
            t.classList.remove("hidden");
            //activate the remove button on the todos we show
            t.querySelector("button").classList.add("destroy");
        }
    });

    showSelectedLink(pressedLink);
}

function showActiveTodos(pressedLink) {
    const allTodos = getTodoList();

    allTodos.forEach(t => {
        if (t.classList.contains("completed")) {
            t.classList.add("hidden");
            //we also disable the removeButton on the todos that are not visible
            t.querySelector("button").classList.remove("destroy");
        }

        if (!(t.classList.contains("completed")) && t.classList.contains("hidden")) {
            t.classList.remove("hidden");
            //activate the remove button on the todos we show
            t.querySelector("button").classList.add("destroy");
        }
    });

    showSelectedLink(pressedLink);
}

function getTodoList() {
    const allTodos = Array.from(document.querySelector(".todo-list").querySelectorAll("li"));

    return allTodos;
}

function getAllOptionLinks() {
    const optionLinks = Array.from(document.querySelector(".options").querySelectorAll("a"));

    return optionLinks;
}

function showSelectedLink(selectedLink) {
    const optionLinks = getAllOptionLinks();

    optionLinks.forEach(l => {
        if(l.classList.contains("selected")) {
            l.classList.remove("selected");
        }
    });

    selectedLink.classList.add("selected");
}