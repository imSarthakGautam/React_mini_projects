import { useTodo } from "../contexts";
import { useState } from "react";

function TodoForm() {

    //state definition of individual todo
    const [todo, settodo] = useState("")
    //addTodo which was already defined to be imported from useTodos
    const {addTodo} =useTodo()

    const add =(e)=>{
        e.preventDefault();

        if (!todo) return 
        addTodo({todo, completed: false})
        settodo("")
    }


    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=> settodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

