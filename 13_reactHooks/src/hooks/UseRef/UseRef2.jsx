import React, { useRef } from 'react'

const UseRef2 = () => {
    const inputElement = useRef()
    return (
        <div>
            <input type="text" name="" id="" ref={inputElement} />
            <button onClick={() => {
                console.log(inputElement.current.value)
                inputElement.current.style.background = "yellow"
            }}>click me </button>
        </div>
    )
}

export default UseRef2
