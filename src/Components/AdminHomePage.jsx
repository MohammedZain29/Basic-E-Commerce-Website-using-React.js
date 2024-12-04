import React from 'react'
import { AdminNavbar } from './AdminNavbar'
import { Route, Routes } from 'react-router-dom'
import { AdminViewItems } from './AdminViewItems'
import { AdminDashBoard } from './AdminDashBoard'
import { Footer } from './Footer'
import { AdminAddProducts } from './AdminAddProducts'
import { UpdateProducts } from './UpdateProducts'

export const AdminHomePage = () => {
  return (
    <div className="AdminHomePage">
        <AdminNavbar/>
        <Routes>
          <Route path='/' element={<AdminDashBoard/>}/>
          <Route path='/viewproducts' element={<AdminViewItems/>}/>
          <Route path='/addproducts' element={<AdminAddProducts/>}/>
          <Route path='/updateproducts/:id' element={<UpdateProducts/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}
