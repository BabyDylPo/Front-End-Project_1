const todos = [];

const $todos = $(".todos");
const $addTodoForm = $(".add-todo-form");

addTodo = () => {
    let val = $addTodoForm.find("input[type=text]").val();
    console.log(val);
    setTimeout(() => {
        console.log($addTodoForm.find("input[type=text]").val(""));
    }, 2000);
    let todo = {
        value: val, 
        done: false
    };
    console.log(todo);
    todos.push(todo);

}

addTodo();