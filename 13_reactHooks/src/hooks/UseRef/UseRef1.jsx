import React, { useEffect, useRef, useState } from 'react'

const UseRef1 = () => {
    const count = useRef(0)
    const [value, setValue] = useState(0)
    useEffect(() => {
        count.current = count.current + 1
    })
    return (
        <div>
            <button onClick={() => setValue(prev => prev - 1)}>-1</button>
            <h1>value :{value}</h1>
            <button onClick={() => setValue(prev => prev + 1)}>+1</button>
            <h1>count: {count.current}</h1>
        </div>
    )
}

export default UseRef1
