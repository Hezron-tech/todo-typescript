const incomplete = document.getElementById('all-task') as HTMLElement
const titleInput = document.getElementById('task-title') as HTMLInputElement
const descriptionInput = document.getElementById('task-description') as HTMLInputElement
const dateInput = document.getElementById('task-date') as HTMLInputElement
const submit =document.getElementById('addTodo') as HTMLButtonElement


interface Todos{
    title: string,
    description: string,
    date: string,
    // completed:boolean
    
}

class AllTodo{
    private todoArr:Todos[]=[];
    
    constructor(){
        this.display()

    }

    AddTodo(TodoItem:Todos){
        
        this.todoArr.push(TodoItem)
    }

    GetAllTodo(){
        return this.todoArr
    }
    display(){

        let incompleted = document.querySelector(".all-task") as HTMLDivElement;
        incompleted.innerHTML = "<h1>All tasks</h1>";
      
        // let title,desc,duedate,diff=''
          this.GetAllTodo().map( (task:any, index:any)=>{

          const maindiv = document.createElement("div");
         
          const h2 = document.createElement("h2");
          const h4 = document.createElement("h4");
          const p = document.createElement("p");
          
          const button = document.createElement("button");
          const buttonEdit= document.createElement("buttonEdit");
          buttonEdit.innerHTML="edit";
          buttonEdit.id="button-edit";
          button.innerHTML = "delete";
          button.id="button-delete";

          const edit= document.getElementById('button-edit') as HTMLButtonElement
          buttonEdit.addEventListener('click',()=>{



          })
          const del=document.getElementById('button-delete') as HTMLButtonElement
           button.addEventListener('click', ()=>{
            this.deleteTodo(index)
           }
            
           
          

            // removeTodo()l
           ); 

          h2.textContent = `${task.title}`;
          h4.textContent = `${task.description}`;
          p.textContent=`${task.date}`
         
         
          
          maindiv.appendChild(h2);
          maindiv.appendChild(h4);
          maindiv.appendChild(p);
          
          maindiv.appendChild(button);
          maindiv.appendChild(buttonEdit);
        
          incompleted.appendChild(maindiv);
        });
      

    }

    
    deleteTodo(id:number){
        
         this.todoArr.splice(id,1)
         this.display()
        console.log('heloo');
        
    }


}


const task =new AllTodo()


submit.addEventListener('click', (e)=>{
    e.preventDefault()
    const title = titleInput.value
    const description = descriptionInput.value
    const date = dateInput.value
    titleInput.value = "";
    descriptionInput .value = "";
    dateInput .value = "";
    task.AddTodo({title,description,date,}) 
    task.display()
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

  






