import { useState } from 'react'


function HookUseState() {
  const [count , setCount] = useState(1)
  return (
    <>
    <button onClick={()=> setCount(count +1 )}>+</button>
    <span>{count}</span>
    <button onClick={()=> setCount(count-1)}>-</button>

    </>
  )
}

export default HookUseState
