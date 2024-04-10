import { useEffect, useState } from 'react'


function HookuseEffect() {
  const [count , setCount] = useState(1)

  const [screenWidth, SetScreenWidth] = useState(125)
  useEffect(()=>{
    window.addEventListener("resize", ()=>{
      SetScreenWidth(window.innerWidth)
    })
    // unmounting the useeffect
    return ()=>{
      console.log("removed event");
    }
  })
  // useEffect(()=>{
  //   setCount(5)
  // }, [count])
  return (
    <>
    <button onClick={()=> setCount(count +1 )}>+</button>
    <span>{count}</span>
    <button onClick={()=> setCount(count-1)}>-</button>
    <span>{screenWidth}</span>
    </>
  )
}

export default HookuseEffect
