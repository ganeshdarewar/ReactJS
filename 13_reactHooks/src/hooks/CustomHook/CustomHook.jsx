import React, { useEffect, useState } from 'react'
import useLocalstorage from './useLocalstorage'

const CustomHook = () => {

    const [name, setName] = useLocalstorage('userName', '')
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <h1>hello {name}</h1>
        </div>
    )
}

export default CustomHook
