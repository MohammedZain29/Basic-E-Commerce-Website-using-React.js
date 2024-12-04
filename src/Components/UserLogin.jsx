import React, { useState } from 'react'
import '../styles/UserLogin.css'
import 'boxicons' 
export const UserLogin = () => {
    let [username,setUsername] = useState("");
    let [password,setPassword] = useState("");

    

  return (
    <div className='UserLogin'>
        <div className="user">
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} required placeholder='Username'/>
            <i class='bx bxs-user'></i>
            </div>

            <div className="input-box">
            <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} required placeholder='Password'/>
            <i class='bx bxs-lock-alt' ></i>
            </div>

            <div className="remember-forget">
                <label><input type="checkbox" />Remember me</label>
                <a href="">Forgot password</a>
            </div>

        <button type='submit' class="btn">Login</button>
        <div className="register-link">
            <p>Don't have an account? <a href="">Register</a></p>
        </div>
        </form>
        </div>
    </div>
  )
}
