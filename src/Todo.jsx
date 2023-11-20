// export default function Todo({task,isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// conditional rendering option-1.
// export default function Todo({task,isDone}){
//    if(isDone===true){
//     return<li>Finished: {task}</li>
//    }
//    else{
//     return<li>Work: {task}</li>
//    }
// }

// conditional rendering option-2.
// export default function Todo({task,isDone}){
//     if(isDone){
//      return<li>Finish: {task}</li>
//     }
//     return<li>Work done: {task}</li>
//  }

// conditional rendering option-3.(Ternary operator)
// export default function Todo({task,isDone}){
//     return(
//         <li>{isDone? 'Finished': 'Work On'}: {task}</li>  
//     )
   
//  }
// conditional rendering option-4.(&&)
//  export default function Todo({task,isDone}){
//     return(
//         <li>{task} {isDone && "work:Done"}</li>
//     )
// }

// conditional rendering option-5.(||)
// export default function Todo({task,isDone}){
//     return(
//         <li>{task} {isDone || "work it"}</li>
//     )
// }

// conditional rendering option-6.
export default function Todo({task,isDone}){
    let listItem;
    if(isDone){
     listItem=<li>Finish: {task}</li>
    }
    else{
        listItem=<li>Work done: {task}</li>
    }
    return listItem;
 }

