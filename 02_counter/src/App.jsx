import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter =5

  let [counter , setCount] = useState(0);
  
  const addValue = () =>{
    if(counter<20){
      setCount(++counter)
    }
  }

  const removeValue = () => {
    if(counter>0){
      setCount(--counter)
    }
  }
  
  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter Value :{counter}</h2>
    <button
    onClick={addValue}
    >Add Value</button>
    <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
