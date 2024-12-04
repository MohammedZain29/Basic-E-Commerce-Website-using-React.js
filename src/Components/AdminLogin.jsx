import React, { useEffect, useState } from 'react'
import '../styles/AdminLogin.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const AdminLogin = () => {

 

    let [username,setUsername] = useState("");
    console.log(username);
    let [password,setPassword] = useState("");
    console.log(password);

   let [admin,setadmin] = useState([]);

   useEffect(()=>{
    async function fetchAdmin(){
        let data = await fetch('http://localhost:2222/Admin');
        let res = await data.json();
        setadmin(res);
    }
    fetchAdmin();
   },[])
   console.log(admin);
   
   let navigate = useNavigate();

   function login(){
    let val = admin.filter((x)=>{
      return x.email == username && x.password == password
    })
    if(val.length > 0){
      alert("Login successfull")
      navigate('/adminhomepage')
    }
    else{
      alert('invalid')
    }
   }
    

  return (
    <div className='AdminLogin'>
      <div className="admin">
        <form action="">
        <h1>Admin Login</h1>
        <div className="input-box">
        <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter the Username'/>
        <i class='bx bxs-user'></i>
       </div>

       <div className="input-box">
        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter the Password'/>
        <i class='bx bxs-lock-alt' ></i>
        </div>
        <div className="remember-forget">
        <span>New User Register <Link to='/adminsignup'>Sign Up</Link></span>
        </div>
       
        <button class="btn" onClick={login}>Login</button>
        </form>
        </div>
       
    </div>
  )   
}
