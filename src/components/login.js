import React, { useState } from 'react'
import './login.css'
import { userLogin } from '../api/user'
import { Link, } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    function handleSubmit() {
        const user = {
            "user": {
                "manegername": username,
                "password": password
            }
        }
       
           
        userLogin(user).then(async (data) => {
                console.log(data)
                if(data){
                    
                }
       })
        // const loggined = userLogin(user);
        // console.log(loggined);
        // alert(loggined)
        // if (loggined) {
        //     navigate(`/admin`);
        // }

    }
    return (
        <div>
            <h2>---Login to manager screen---</h2><br /><br />
            
           
            {/* <Avatar src="/broken-image.jpg" /> */}
            <TextField id="outlined-basic" label="user name" variant="outlined" required onChange={(e) => { setUsername(e.target.value) }} />
            <br /><br />
            <TextField id="outlined-basic" label="password" variant="outlined" required onChange={(e) => { setPassword(e.target.value) }} />
            <br /><br />
            <Button variant="contained" onClick={handleSubmit}>submit</Button>
           
        </div>

    )
}