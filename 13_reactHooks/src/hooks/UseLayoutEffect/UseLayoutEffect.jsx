import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {
    useEffect(() => {
        console.log('message from useEffect'); // this is called after the printing the element
    }, [])
    useLayoutEffect(() => {
        console.log('message from useLayoutEffect'); // this is called before the printing element
    }, [])
    return (
        <div>
            {
                Array(40000).fill('').map((_, index) => {
                    return <li key={index}>{index}</li>
                })
            }
        </div>
    )
}

export default UseLayoutEffect
