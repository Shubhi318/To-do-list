const createToDoDiv = (toDoInput, toDoPriorityInput) => {

    const toDoCardDiv= document.createElement('div')
    const cardHeaderDiv= document.createElement('div')
    const priorityDisplaySpan= document.createElement('span')
    // const deadlineDisplaySpan= document.createElement('span')
    const cardBodyDiv= document.createElement('div')
    const cardTitleH5= document.createElement('h5')
    const deleteButton= document.createElement('a')

    toDoCardDiv.classList= 'card to-do-card'
    cardHeaderDiv.classList= 'card-header'

    switch(toDoPriorityInput){
        case 'High':
            priorityDisplaySpan.classList= 'badge rounded-pill bg-danger'
            break;
        case 'Medium':
             priorityDisplaySpan.classList= 'badge rounded-pill bg-warning text-dark'
             break;
        case 'Low':
              priorityDisplaySpan.classList= 'badge rounded-pill bg-primary '
              break;
    }
    
    cardBodyDiv.classList= 'card-body'
    cardTitleH5.classList= 'card-title'
    deleteButton.classList= 'btn btn-danger btn-sm delete'

    toDoCardDiv.id= `to-do-card-${idCount}`
    toDoCardDiv.draggable= "true"
    toDoCardDiv.ondragstart= "toDoDragStart()"
    toDoCardDiv.ondrag= "toDODrag()"


    priorityDisplaySpan.innerText= `${toDoPriorityInput} Priority`
    cardTitleH5.innerText= toDoInput
    // deadlineDisplaySpan.innerText= toDoDeadline
    deleteButton.innerText= 'Delete'
   

    toDoCardDiv.appendChild(cardHeaderDiv)
    cardHeaderDiv.appendChild(priorityDisplaySpan)
    // cardHeaderDiv.appendChild(deadlineDisplaySpan)
    toDoCardDiv.appendChild(cardBodyDiv)
    cardBodyDiv.appendChild(cardTitleH5)
    cardBodyDiv.appendChild(deleteButton)
    toDoBlock.appendChild(toDoCardDiv)
    

//     <div class="card to-do-card">
//     <div class="card-header">
//       <span class="badge bg-danger text-dark"> High priority</span>
//     </div>
//     <div class="card-body">
//       <h5 class="card-title">Async Await revision</h5>
//       <a class="btn btn-danger btn-sm">Delete</a>
//     </div>
//   </div>
idCount++;

}