import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(0)
    function cubeNum(num) {
        console.log('calculation done!');
        return Math.pow(num, 3)
    }
    // const result = cubeNum(number) // it rendering multiple time even it is not needed
    const result = useMemo(() => cubeNum(number), [number])

    return (
        <div>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <h1>cube: {result}</h1>
            <button onClick={() => setCounter(counter + 1)}>count ++</button>
            <h1>counter :{counter}</h1>
        </div>
    )
}

export default UseMemo


