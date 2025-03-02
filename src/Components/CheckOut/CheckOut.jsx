import React, { useContext, useState } from 'react'
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useFormik } from 'formik';
import * as Yup from "yup"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider';
import { Alert } from 'flowbite-react';
import { CartContext } from '../../context/CartContext';
export default function CheckOut() {
 
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState(null)
  const {cart} =useContext(CartContext)
  async function onSubmit(shippingAddress) {
    try {
      setLoading(true)
      const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.cartId}?url=http://localhost:5173`, {
       shippingAddress
       },{
        headers: {
          token: localStorage.getItem("token")
        }
       });
      console.log("Response Data:", data);
      location.href = data.session.url
      setLoadding(true)
      setLoading(false)
    } catch (err) {
      setLoading(true)
      
      setLoading(false)
    }
  }

  const { handleSubmit, handleChange, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      city: "",
      details: "",
      phone: "",
    },
    onSubmit,
    
  })

  return <>
    <h1 className='text-[#0aad0a] text-center my-4'>CheckOut</h1>
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 mb-2">
        
        <Input onChange={handleChange} onBlur={handleBlur} value={values.city} name='city' className='col-span-2 w-[60%] mx-auto' label="city:" type="text" required/>
       
          
        
    <Input onChange={handleChange} onBlur={handleBlur} value={values.details} name='details' className='col-span-2 w-[60%] mx-auto' label="details:" type="text" required />
        
        
    <Input onChange={handleChange} onBlur={handleBlur} value={values.phone} name='phone' className='col-span-2 w-[60%] mx-auto' label="phone:" type="tel" required />
        
   
        
        
        
        {loading?
        <Button type='submit' className='col-span-2 w-[60%] mt-7 mx-auto bg-[#0aad0a] p-0.5 text-lg' color="primary"><i className="fa-solid fa-spinner text-2xl fa-spin"></i></Button>
        :
        <Button type='submit' className='col-span-2 w-[60%] mx-auto bg-[#0aad0a] p-0.5 font-semibold text-lg' color="primary">Pay Now</Button>
        }
      </div>
     
    </form>
  </>
}



