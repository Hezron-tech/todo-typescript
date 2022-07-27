"use strict";
const incomplete = document.getElementById("all-task");
const titleInput = document.getElementById("task-title");
const descriptionInput = document.getElementById("task-description");
const dateInput = document.getElementById("task-date");
const submit = document.getElementById("addTodo");
const updateBtn = document.getElementById("updateBtn");
class AllTodo {
    constructor() {
        this.todoArr = [];
        this.display();
    }
    AddTodo(TodoItem) {
        this.todoArr.push(TodoItem);
    }
    GetAllTodo() {
        return this.todoArr;
    }
    getTaskById(id) {
        return this.todoArr.find((task) => task.id === id);
    }
    display() {
        let incompleted = document.querySelector(".all-task");
        incompleted.innerHTML = "<h1>All tasks</h1>";
        // let title,desc,duedate,diff=''
        this.GetAllTodo().map((task, index) => {
            const maindiv = document.createElement("div");
            maindiv.style.padding = "20px";
            const h2 = document.createElement("h2");
            h2.style.padding = "10px";
            const h4 = document.createElement("h4");
            const p = document.createElement("p");
            const button = document.createElement("button");
            button.style.color = "white";
            button.style.backgroundColor = "red";
            button.style.padding = "15px";
            button.style.borderRadius = "20px";
            button.style.marginRight = "5px";
            const edit = document.createElement("button");
            const completed = document.createElement("button");
            button.innerHTML = "delete";
            button.id = "button-delete";
            edit.innerHTML = "Edit";
            edit.id = "button-edit";
            edit.style.padding = "15px";
            edit.style.borderRadius = "20px";
            edit.style.marginRight = "5px";
            completed.innerHTML = "completed";
            completed.id = "btn-completed";
            completed.style.padding = "15px";
            completed.style.borderRadius = "20px";
            completed.style.marginRight = "5px";
            edit.addEventListener("click", () => {
                const addTodo = document.getElementById("addTodo");
                addTodo.style.display = "none";
                updateBtn.style.display = "inline";
                updateBtn.setAttribute("data-id", index);
                updateTodo(index);
            });
            completed.addEventListener("click", () => {
                console.log(index);
            });
            const del = document.getElementById("button-delete");
            button.addEventListener("click", () => {
                this.deleteTodo(index);
            });
            h2.textContent = `${task.title}`;
            h4.textContent = `${task.description}`;
            p.textContent = `${task.date}`;
            maindiv.appendChild(h2);
            maindiv.appendChild(h4);
            maindiv.appendChild(p);
            maindiv.appendChild(button);
            maindiv.appendChild(edit);
            maindiv.appendChild(completed);
            incompleted.appendChild(maindiv);
        });
    }
    deleteTodo(id) {
        this.todoArr.splice(id, 1);
        this.display();
    }
    updateTodo(index, todo) {
        this.todoArr.splice(index, 1, todo);
        this.display();
    }
}
const task = new AllTodo();
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const description = descriptionInput.value;
    const date = dateInput.value;
    titleInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
    task.AddTodo({ title, description, date });
    task.display();
});
const updateTodo = (id) => {
    const taskTodo = task.GetAllTodo()[id];
    titleInput.value = taskTodo.title;
    descriptionInput.value = taskTodo.description;
    dateInput.value = taskTodo.date;
};
const handleUpdate = (target) => {
    let id = target.getAttribute("data-id");
    if (id) {
        const index = parseInt(id);
        const title = titleInput.value;
        const description = descriptionInput.value;
        const date = dateInput.value;
        titleInput.value = "";
        descriptionInput.value = "";
        dateInput.value = "";
        task.updateTodo(index, { title, description, date });
    }
};
