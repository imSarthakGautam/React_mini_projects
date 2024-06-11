import '../App.css'
import { useState } from 'react';
export default function Square( {value}){

    const [value, setValue]= useState(null);
    // value stores the value and setValue is a function that can be used to change the value.
    // The null passed to useState is used as the initial value for this state variable, 
    //so value here starts off equal to null.

   
    return (
        <>
        <button className='square'  > {value}</button>
        </>
    );
        
}