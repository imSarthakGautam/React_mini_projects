function To_do_item({ tasks, deleteTask, completeTask }) {
    console.log(tasks);
  
    return (
      <div>
        <div className="task">{tasks}</div>
        <button className="doneIcon" onClick={completeTask}>DONE</button>
        <button className="deleteIcon" onClick={deleteTask}>DEL</button>
      </div>
    );
  }
  
  export default To_do_item;
  