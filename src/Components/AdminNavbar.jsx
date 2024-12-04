import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Adminaccount from './Adminaccount'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/AdminNavbar.css'
export const AdminNavbar = () => {

  return (
    <div className="AdminNavbar">
        <div className="logo">
            <Link to='/adminhomepage'><h1>S<span>hoppinglyX</span></h1></Link> 
        </div>
        <div className="links">
            <Link to="/adminhomepage/addproducts">Add Items</Link>
            <Link to='/adminhomepage/viewproducts'>List</Link>
            <Link to='/adminhomepage/viewcart'> <ShoppingCartIcon/> Cart</Link>
        </div>
        <div className="account">
            <Adminaccount/>
        </div>
    </div>
  )
}
