const todos = [];

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
    
    populateList(todos);
}

populateList = () => {
    todos.map(( todo ) => {
        let val = todo.value;
        let dn =todo.done;
        todo.value = $(`<label>${val}</label>`);
        todo.done = $(`<input type="checkbox" value="${dn}">`);
    })
    console.log(todos);
}

$addTodoForm.submit( (event) => {
    event.preventDefault();
    addTodo();
});