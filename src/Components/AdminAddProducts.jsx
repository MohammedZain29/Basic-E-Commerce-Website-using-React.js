import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import '../styles/AdminAddProducts.css'

export const AdminAddProducts = () => {

  let [category,setCategory] = useState("")
  let [name,setName] = useState("")
  let [price,setPrice] = useState("")
  let [image,setImage] = useState("")
  let [rating,setRating] = useState("")
  let [desc,setDesc] = useState("")

  let data = {category,rating,price,name,image,desc}

  function addProduct(e) {
    e.preventDefault();
    axios.post('http://localhost:2222/Product',data)
    .then((res)=>{
        console.log(res);
        toast.success("Data Added Successfully")
    })
    .catch((err)=>{
        console.log(err);
        toast.error("Invalid Data")
        
    })
    
  }

  return (
    <div className='addproducts'>
        <form onSubmit={addProduct} action="">
            <fieldset>
                <label htmlFor="">
                    Category :
                </label>
                <select required value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                    <option>Dress Matierials</option>
                    <option>Mobile</option>
                    <option>Mobile Accessories</option>
                    <option>Electronics</option>
                    <option>Groceries</option>
                </select>
                <label htmlFor="">
                    ProductName :
                </label>
                <input required type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter the Product' />
                <label htmlFor="">
                    Product Price :
                </label>
                <input required type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter the Price' />
                <label htmlFor="">
                    Desc :
                </label>
                <textarea required rows="2" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder='Enter the text' cols="30"></textarea>
                <label htmlFor="">
                    Thumbnail :
                </label>
                <input required type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} placeholder='Enter the Image address' />
                <label htmlFor="">
                    Ratings :
                </label>
                <input required type="Number" value={rating} onChange={(e)=>{setRating(e.target.value)}} placeholder='Enter the ratings' />
                <button className='btn btn-danger'>Add Item</button>
            </fieldset>
        </form>
    </div>
  )
}
