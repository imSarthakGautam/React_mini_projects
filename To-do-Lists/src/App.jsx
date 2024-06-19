
import To_do_list from './components/To_do_list'
import './App.css'
import To_do_form from './components/To_do_form'
import { useState } from 'react'


function App() {

  const [tasks,setTasks]= useState([])
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTasks=(task)=>{
    const newTasks=[...tasks, task]
    setTasks(newTasks);
  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index)
    setTasks(newTasks)
  }
  
  const completeTask = (index) => {
    const taskToComplete = tasks[index];
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const updatedCompletedTasks = [...completedTasks, taskToComplete];
    setTasks(updatedTasks);
    setCompletedTasks(updatedCompletedTasks);
  };

  

  return (
   <div> 
    <h1>To-do-Lists</h1>
    <To_do_form  addTasks={addTasks}/>
    <To_do_list tasks={tasks} deleteTask={deleteTask} completeTask={completeTask}/>
   <h2>Completed Tasks</h2>
   <To_do_list tasks={completedTasks} />
   </div>
  )
}

export default App
