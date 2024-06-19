import { useState } from "react";

function To_do_form({addTasks}){
    const [input, setInput] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;
        addTasks(input);
        setInput('');
      };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Task to Do" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="addNewTask" type="submit" >Add New Task</button>
        </form>
        </>
    )

}

export default To_do_form;
