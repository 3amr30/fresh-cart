import React, { useContext, useState } from 'react'
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useFormik } from 'formik';
import * as Yup from "yup"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider';
import { Alert } from 'flowbite-react';
export default function Login() {
 
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState(null)
  const {loadding ,setLoadding } =useContext(UserContext)
  async function onSubmit(values) {
    try {
      setLoading(true)
      const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values);
      localStorage.setItem("token", data.token)
      setToken(data.token)
      console.log("Response Data:", data);
      navigate('/home')
      setLoadding(true)
      setLoading(false)
    } catch (err) {
      setLoading(true)
      setError(err.response.data.message)
      setLoading(false)
    }
  }

  const { handleSubmit, handleChange, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: Yup.object({
      email: Yup.string().required("the email is required").email('the email is invaled'),
      password: Yup.string().required("the password is required").min(3, "the min length is 3").max(21, "the max length is 21"),
    })
  })

  return <>
    <h1 className='text-[#0aad0a] text-center my-4'>Login</h1>
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 mb-2">
        
        <Input onChange={handleChange} onBlur={handleBlur} value={values.email} name='email' className='col-span-2 w-[60%] mx-auto' label="Email:" type="email" />
        <div className="col-span-2 w-[60%] mx-auto">
          {errors.email && touched.email &&  <div className="flex flex-col gap-4 w-full">
      {[ "faded"].map((error) => (
        <Alert
          key={errors.email}
          color="danger"
          title={`This is a ${error.email} variant alert`}
          variant={errors.email}
        />
      ))}
    </div>}
        </div>
        <Input onChange={handleChange} onBlur={handleBlur} value={values.password} name='password' className='col-span-2 w-[60%] mx-auto' label="Password:" type="password" />
        <div className="col-span-2 w-[60%] ms-auto">
          {errors.password && touched.password &&  <div className="flex flex-col gap-4 w-full">
      {[ "faded"].map((error) => (
        <Alert
          key={errors.password}
          color="danger"
          title={`This is a ${errors.password}} variant alert`}
          variant={errors.password}
        />
      ))}
    </div>}
        </div>
        {loading?
        <Button type='submit' className='col-span-2 w-[60%] mx-auto bg-[#0aad0a] p-0.5 text-lg' color="primary"><i className="fa-solid fa-spinner text-2xl fa-spin"></i></Button>
        :
        <Button type='submit' className='col-span-2 w-[60%] mx-auto bg-[#0aad0a] p-0.5 text-lg' color="primary">Login</Button>
        }
      </div>
      <div className='col-span-2 w-[70%] mx-auto text-center'>
            <Link className='col-span-1 ms-auto  w-fit border-[#0aad01] duration-200'  to={"/ForgotPassword"}>Forgot your Password ?</Link>
          </div>
      <div className="col-span-2 w-[60%] mx-auto">
          {error &&  <div className="flex flex-col gap-4 w-full">
      {[ "faded"].map((error) => (
        <Alert
          key={error}
          color="danger"
          title={`This is a ${error}} variant alert`}
          variant={error}
        />
      ))}
    </div>}
        </div>
    </form>
  </>
}



