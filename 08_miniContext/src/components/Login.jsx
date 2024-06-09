import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext)
    function handleSubmit(e) {
        setUser(userName, password)
    }
    return (
        <div>
            <h2>Login</h2>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" name="" id="" placeholder='username ..' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" id="" placeholder='password ..' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
