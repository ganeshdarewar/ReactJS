import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter =5

  let [counter , setCount] = useState(0);
  
  const addValue = () =>{
    if(counter<20){
      // setCount(counter+1)
      // setCount(counter+1)
      // setCount(counter+1)
      // setCount(counter+1)
      // here react create all setcount in single batch thats why it is only add single time

      setCount(prevCount=> prevCount+1)
      setCount(prevCount=> prevCount+1)
      setCount(prevCount=> prevCount+1)
      // here react first take prevCount and then add
    }
  }

  const removeValue = () => {
    if(counter>0){
      setCount(counter-1)
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
