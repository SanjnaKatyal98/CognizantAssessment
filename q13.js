class Todo{
    constructor(title){
        this.title = title;
    }
}

class UI{
    addTodoToList(todo){
        const list = document.getElementById('todo-list');
        const row = document.createElement('tr');
        row.innerHTML =`
            <td> ${todo.title} </td>
            <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }

    clearFormFields(){
        document.getElementById('title').value='';
    }

    showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const form = document.querySelector("#todo-form");
        container.insertBefore(div, form);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 2000);
    }

    deleteTodo(target){
        if(target.className === "delete"){
            target.parentElement.parentElement.remove();
        }
    }
}

class Store{
    static getTodos(){
        let todos;
        if(localStorage.getItem('todos')===null){
            todos=[];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        return todos;
    }

    static displayTodos(){
        const todos = Store.getTodos();
        todos.forEach((todo)=>{
            const ui = new UI;
            todo.className= ' collection-item';
            ui.addTodoToList(todo);
        })
    }

    static addTodo(todo){
        console.log(todo);
        const todos = Store.getTodos();
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    static removeTodo(title){
        const todos = Store.getTodos();
        todos.forEach((todo, index)=>{
            if(todo.title === title){
                todos.splice(index,1);
            }
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}

//load Books list
document.addEventListener('DOMContentLoaded', Store.displayTodos);
//form submit event
document.getElementById('todo-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value;
    const todo = new Todo(title);
    Store.addTodo(todo);
    const ui = new UI();
    if(title === ""){
        ui.showAlert("Provide all fields", 'error');
    }
    else{
        ui.addTodoToList(todo);
        Store.showAlert('task added succesfully', 'success');
        ui.clearFormFields();
    }
    e.preventDefault();
});

//delete event listener
document.getElementById('todo-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteTodo(e.target);
    Store.removeTodo(e.target.parentElement.parentElement.textContent);
    e.preventDefault();
});

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll(".collection-item").forEach
        (function (task) {
            const item = task.firstChild.textContent;
              if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = "block";
            } else {
                task.style.display = "none";
            }
        });
}

//filter todo form : event listener
document.getElementById('todo-flter-form').addEventListener('submit', filterTasks);