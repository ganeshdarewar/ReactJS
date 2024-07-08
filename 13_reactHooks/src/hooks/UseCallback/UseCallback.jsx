import React, { useCallback, useState } from 'react'
import Header from '../../component/Header'

const UseCallback = () => {
    const [count, setCount] = useState(0)
    // const newFn = () => { } // it will rerendered the header component again and again because every time this function will create new function has different memory location
    // const newFn = useCallback(() => { }, []) // now it will not create function again instead it will cache function (previous function)
    const newFn = useCallback(() => { }, [count]) // not it only create a new function when the dependancy change
    return (
        <div>
            <Header newFn={newFn} />
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>count++</button>
        </div>
    )
}

export default UseCallback
