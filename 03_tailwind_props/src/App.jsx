import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'



function App() { 
  const obj={
    userName: "ganesh",
    lastName : "darewar"
  }
  const arr =[1,2,3]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>

    <Card name = "Ganesh" myObj={obj} myArr = {arr}></Card>
    </>
  )
}

export default App
