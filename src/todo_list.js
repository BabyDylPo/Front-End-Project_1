console.log(window.localStorage);
const todos = JSON.parse(localStorage.getItem('todos')) || [];

const $todos = $(".todos");
const $addTodoForm = $(".add-todo-form");


addTodo = () => {
    let val = $addTodoForm.find("input[type=text]").val();
    $addTodoForm.find("input[type=text]").val("");
    
    let todo = {
        value: val, 
        done: false
    };
    todos.push(todo);
    
    populateList();
    locallyStoreTodos();
}

populateList = () => {
    //reset $todos children so duplicates arent added
    let children = Array.from($todos.children())
    // If Yes, then DESTROY THEM ALL
    if (children) {
        children.forEach((child) => {
            child.remove();
        })
    }

    // iterate through todos and append a $todo to $todos
    todos.forEach(( todo ) => {
        let $todo;

        $todo = $(`<li><input type="checkbox" value="${todo.done} class="check-box"><label>${todo.value}</label></li>`);
        $todos.append($todo);
    })


    // WORKING HERE LAST THING WRITTEN
    checkBoxes();
    
}

locallyStoreTodos = () => {
    // can only store strings on localStorage
    window.localStorage.setItem('todos', JSON.stringify(todos));
    console.log(window.localStorage);
}

checkBoxes = () => {
    //create a $checkBoxes variable so I can iterate through all inputs and get value from them.
    if (todos) {
        const $checkBoxes = $(".todos :input");
        console.log($checkBoxes);
    }
    //Not finished
}

populateList();


$addTodoForm.submit( (event) => {
    event.preventDefault();
    addTodo();
});




