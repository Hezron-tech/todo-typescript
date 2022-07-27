"use strict";
const incomplete = document.getElementById('all-task');
const titleInput = document.getElementById('task-title');
const descriptionInput = document.getElementById('task-description');
const dateInput = document.getElementById('task-date');
const submit = document.getElementById('addTodo');
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
    display() {
        let incompleted = document.querySelector(".all-task");
        incompleted.innerHTML = "<h1>All tasks</h1>";
        // let title,desc,duedate,diff=''
        this.GetAllTodo().map((task, index) => {
            const maindiv = document.createElement("div");
            const h2 = document.createElement("h2");
            const h4 = document.createElement("h4");
            const p = document.createElement("p");
            const button = document.createElement("button");
            button.innerHTML = "delete";
            button.id = "button-delete";
            const del = document.getElementById('button-delete');
            button.addEventListener('click', () => {
                this.deleteTodo(index);
            }
            // removeTodo()l
            );
            h2.textContent = `${task.title}`;
            h4.textContent = `${task.description}`;
            p.textContent = `${task.date}`;
            maindiv.appendChild(h2);
            maindiv.appendChild(h4);
            maindiv.appendChild(p);
            maindiv.appendChild(button);
            incompleted.appendChild(maindiv);
        });
    }
    deleteTodo(id) {
        this.todoArr.splice(id, 1);
        this.display();
        console.log('heloo');
    }
}
const task = new AllTodo();
submit.addEventListener('click', (e) => {
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
// function displayTasks() {
//     let incompleted = document.querySelector(".all-task") as HTMLDivElement;
//     incompleted.innerHTML = "<h1>All tasks</h1>";
//     // let title,desc,duedate,diff=''
//       task.GetAllTodo().map( (task:any, index:any)=>{
//       const maindiv = document.createElement("div");
//       const h2 = document.createElement("h2");
//       const h4 = document.createElement("h4");
//       const p = document.createElement("p");
//       const button = document.createElement("button");
//       button.innerHTML = "delete";
//       button.id="button-delete";
//       const del=document.getElementById('button-delete') as HTMLButtonElement
//        button.addEventListener('click', ()=>{
//         task.deleteTodo(index)
//        }
// removeTodo()l
//    ); 
//       h2.textContent = `${task.title}`;
//       h4.textContent = `${task.description}`;
//       p.textContent=`${task.date}`
//       maindiv.appendChild(h2);
//       maindiv.appendChild(h4);
//       maindiv.appendChild(p);
//       maindiv.appendChild(button);
//       incompleted.appendChild(maindiv);
//     });
//   }
// function removeTodo(){
//     task.deleteTodo(1)
//     displayTasks()
// }  
// let completed = document.querySelector("#all-task") as HTMLDivElement;
