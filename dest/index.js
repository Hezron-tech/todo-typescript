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
        //return this.completedTasks
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
            button.style.padding = "10px";
            button.style.borderRadius = "20px";
            button.style.marginRight = "5px";
            const edit = document.createElement("button");
            const completedButton = document.createElement("button");
            button.innerHTML = "delete";
            button.id = "button-delete";
            edit.innerHTML = "Edit";
            edit.id = "button-edit";
            edit.style.padding = "15px";
            edit.style.borderRadius = "20px";
            edit.style.marginRight = "5px";
            edit.style.backgroundColor = "aqua";
            completedButton.innerHTML = "completed";
            completedButton.id = "btn-completed";
            completedButton.style.padding = "15px";
            completedButton.style.borderRadius = "20px";
            completedButton.style.marginRight = "5px";
            completedButton.style.backgroundColor = "grey";
            edit.addEventListener("click", () => {
                const addTodo = document.getElementById("addTodo");
                addTodo.style.display = "none";
                updateBtn.style.display = "inline";
                updateBtn.setAttribute("data-id", index);
                updateTodo(index);
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
            maindiv.appendChild(completedButton);
            incompleted.appendChild(maindiv);
        });
    }
    //end of display function
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
class Complete extends AllTodo {
    constructor() {
        super();
        this.completedTasks = [];
    }
    completedTask(todo) {
        this.completedTasks.push(todo);
    }
    getCompletedTask() {
        return this.completedTasks;
    }
}
/*
const complete = new Completed()
 function  completeTask(index:any)  {
    let inputs = document.getElementById("checked") as HTMLInputElement;
    let completed = document.querySelector(".completed") as HTMLDivElement;
    completed.innerHTML = "<h1>Completed tasks</h1>";
    inputs.checked = true;
    if (inputs.checked === true) {
      const singlecompletedtask = task.getTasks()[index];
  
      // Add to completed Array
      complete.getCompletedTask().push({  ...singlecompletedtask });
      // remove from task array
  
      task.getTasks().splice(index, 1);
      displayTasks();
      let completed = document.querySelector(".completed") as HTMLDivElement;
    completed.innerHTML = "<h1>Completed tasks</h1>";
    complete.getCompletedTask().map(function (item, i) {
      let dateNow = new Date();
    let duedate = new Date(item.duedate);
    let start = dateNow.getTime();
    let due = duedate.getTime();
    let diff = Math.ceil((due-start) / (24 * 3600 * 1000));
      const maindiv = document.createElement("div");
      maindiv.style.backgroundColor = "azure";
      maindiv.style.height = "200px";
      maindiv.style.textAlign = "center";
      const h2 = document.createElement("h2");
      const h4 = document.createElement("h4");
      const p = document.createElement("p");
      const p2 = document.createElement("p");
      h2.textContent = `${item.title}`;
      h4.textContent = `${item.desc}`;
      p.textContent=`${item.duedate}`
      
      p2.textContent = diff>=0? `You submitted  ${diff} days early`:`You submitted  ${diff} days late`;
      console.log(diff)
      
      
      maindiv.appendChild(h2);
      maindiv.appendChild(h4);
      maindiv.appendChild(p);
      maindiv.appendChild(p2);
      completed.appendChild(maindiv);
    });
    }
  };
}*/ 
