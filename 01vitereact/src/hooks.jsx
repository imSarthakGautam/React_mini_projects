import { useState } from "react";

function Hooks(){
//Learning Hooks
let [counter, setCounter]= useState(0)

//let counter =5
const addValue=()=>{
    
    counter++;
    setCounter(counter)
}

const decrValue=()=>{
    
    counter--;
    setCounter(counter)
}

return(
    <>
    <h1>Counter Project </h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={decrValue}>Decrease Value</button>
    </>
)

}

export default Hooks