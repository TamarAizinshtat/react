import React, { useState } from 'react'
import './login.css'
import { userLogin } from '../api/user'
import {  Link,  } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        const user = {
            "user": {
                "username": username,
                "password": password
            }
        }
        // e.preventDefault();
        const loggined = userLogin(user);
        console.log(loggined);
        if (loggined) {
            return <Link to="/customer">customer</Link>
        }
    }
    return (
        <div>
            <h2>---userLogin---</h2><br />
            <label>user name   </label><br />
            <input type="text" placeholder="user name" required onChange={(e) => { setUsername(e.target.value) }}></input><br /><br /><br />
            <label>password   </label><br />
            <input type="password" placeholder="password" required onChange={(e) => { setPassword(e.target.value) }}></input><br /><br /><br /><br /><br /><br />
            {/* <button onClick={() =>handleSubmit()} /> */}
            <button onClick={handleSubmit}>submit</button>
        </div>

    )
}