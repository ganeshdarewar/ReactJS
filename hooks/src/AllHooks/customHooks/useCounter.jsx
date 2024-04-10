import React, { useState } from 'react'

function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue)
    function add(){
      setCount(count+1)
    }
    function sub(){
      setCount(count-1)
    }
    return [count, add, sub]
}

export default useCounter
