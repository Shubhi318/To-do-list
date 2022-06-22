const toDoBlock= document.getElementById('to-do-block');
let idCount=1;


const createToDo = () =>{
    const toDoInput= document.getElementById('todo-input').value
    const toDoPriorityInput= document.getElementById('todo-priority-input').value
    // const toDoDeadline= new Date(
    //     document.getElementById('todo-deadline').value
    // ).toLocaleDateString("en-US",{
    //     year: "numeric"
    //     month: "long"
    //     day: "numeric"
    //     hour: "numeric"
    //     minute: "numeric"
    //     second: "numeric"
    // });
    
    createToDoDiv(toDoInput ,toDoPriorityInput)
}
      
const toDODragStart= () =>{

}

const toDODrag= () =>{
    
}

const dropToDo= (event) =>{
    
}
const allowDrop= (event) =>{
    event.preventDefault()
}