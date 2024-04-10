import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from './AllHooks/customHooks/useCounter'

function App() {
  const [count, add, sub] = useCounter(10)
  return (
    <>
    <button onClick={add}>+</button>
    <span>{count}</span>
    <button onClick={sub}>-</button>

    </>
  )
}

export default App
