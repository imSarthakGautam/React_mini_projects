import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-green-400">
      Tailwind test 
      </div>
      <Card device="windows" action="read"/>
      <Card device="Macbook" action="read"/>
      <Card device="Linux" action="write"/>
      
    </>
  )
}

export default App
