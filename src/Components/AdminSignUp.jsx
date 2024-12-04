import React, { useState } from 'react'
import axios from 'axios'
import '../styles/AdminSignUp.css'
import 'boxicons'
import 'bootstrap/dist/css/bootstrap.min.css';

 const AdminSignUp = () => {
    let [name,setName] = useState("")
    let [email,setEamil] = useState("")
    let [password,setPassword] = useState("")
    let [phone,setPhone] = useState("")

    let data = {name,email,password,phone}

    function addAdmin(){
        axios.post('http://localhost:1111/Admin',data)
        .then((res)=>{
            console.log(res);
            alert("Admin Created Succesfully")
        })
        .catch((err)=>{
            console.log(err);
            alert("invalid Data")
            
        })
    }

  return (
    <div className='AdminSignUp'>
        <form onSubmit={addAdmin} action="">
             <h2>Admin SignUp</h2>
        <div className="input-box">
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Name' /></div>
            <input type="email"  value={email} onChange={(e)=>{setEamil(e.target.value)}} placeholder='Email' />
            <input type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
            <input type="tel" pattern='[0-9]{10}' value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Phone' />
            <button className='btn btn-primary'>Sign Up</button>
        </form>
        </div>
    
  )
}
export default AdminSignUp