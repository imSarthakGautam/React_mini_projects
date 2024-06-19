import To_do_item from "./To_do_item"

function To_do_list({tasks, deleteTask,completeTask}){
console.log(tasks)
    
return(
    <ul>
        { 
        tasks.map((task, index)=>(<To_do_item key={index} tasks={task} deleteTask={() => deleteTask(index)} completeTask={() => completeTask(index)}/>))
        }
    
    </ul>

)
}

export default To_do_list