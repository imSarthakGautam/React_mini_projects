import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
   <div className=" w-full h-screen bg-blue-50" style={{backgroundColor:color}}>This is a bagkground changer application
   
  
    <div className='flex flex-wrap shadow-xl bg-blue-50 my-9 mx-10 rounded-lg h-[200px] px-5'> 

      <div className="flex flex-wrap bottom-12 bg-black text-white px-2 py-2 rounded-md h-[30%] mt-12"> Choose the appropriate color </div>
      <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white h-[30%] mt-12 mx-2' style={{backgroundColor:"red"}}>red</button>
      <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white h-[30%] mt-12 mx-2' style={{backgroundColor:"blue"}}>blue</button>
      <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white h-[30%] mt-12 mx-2' style={{backgroundColor:"green"}}>green</button>
      <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg text-black h-[30%] mt-12 mx-2 ' style={{backgroundColor:"yellow"}}>yellow</button>
      <button onClick={()=>setColor("pink")} className='outline-none px-4 py-1 rounded-full shadow-lg text-black h-[30%] mt-12 mx-2' style={{backgroundColor:"pink"}}>pink</button>
      
    
    </div>
  </div>
  </>
  )
}

export default App
