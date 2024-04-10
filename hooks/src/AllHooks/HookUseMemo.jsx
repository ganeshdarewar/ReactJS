import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [add, setAdd] = useState(0)
  const [sub, setSub] = useState(100)

  // const mul = ()=>{
  //   console.log("function call again and again when there is no need to call for e.g. when you do substraction");
  //   return add*2
  // }

  //  here i called the function when only add change their value
  const mul = useMemo(()=>{
    console.log("here i called the function when only add change their value");
    return add*2
  }, [add])
  return (
    <>
    <span>{mul}</span> <br />
    <button onClick={()=> setAdd(add +1 )}>+</button>
    <span>{add}</span>
    <button onClick={()=> setSub(sub-1)}>-</button>
    <span>{sub}</span>

    </>
  )
}

export default App
