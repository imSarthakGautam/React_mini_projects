import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] =useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [password, setPassword]=useState("")

  //password Generator
  const passwordGenerator=useCallback(()=>{

    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+="0123456789"
    if (charAllowed) str+=".!~@#$%^&*()_+-";

    for (let i=1;i<=length; i++){
      let char=Math.floor(Math.random()*str.length +1)
      pass +=str.charAt(char)

    }
    setPassword(pass)

  },[length,numberAllowed, charAllowed, setPassword])


  useEffect(()=>{
    passwordGenerator();


  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      
      <h1 className='text-4xl text-center text-white '> Password Changer</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700">
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" placeholder="password" 
          value={password}
          readOnly
          className='outline-none w-full py-1 px-3'
          />
          <button className="outline-none bg-white text-black px-3 py-0.5 shrink-0">Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={6}
            max={25}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
             />
             <label >Length:{length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
             }}/>
            <label htmlFor="numberInput">Numbers</label>

            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}/>
            <label htmlFor="charInput">Special Characters</label>
          </div>

        
        </div>
      </div>
      
      
    </>
  )
}

export default App
