import React, { useState } from 'react'
import style from './Register.module.css'
import { Input } from "@heroui/input";
import { Button, ButtonGroup } from "@heroui/button";
import { useFormik } from 'formik';
import * as Yup from "yup"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '@heroui/react';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
export default function Register() {

   const handleButtonClick = () => {
      navigate('/login', { replace: true });    };
  const navigate = useNavigate()
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState(null)
  async function onSubmit(values) {
    try {
      setLoading(true)
      const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values);
      localStorage.setItem("token", data.token)
       setToken(localStorage.getItem("token"))
      // console.log("Response Data:", data);
      navigate('/login')
        
      setLoading(false)
       if (loading){
         navigate('/loading')
       }else{
        navigate('/login')
       }
    } catch (err) {
      setLoading(true)
      setError(err.response.data.message)
      setLoading(false)
    }
  }

  const { handleSubmit, handleChange, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit,
    validationSchema: Yup.object({
      name: Yup.string().required("the name is required").min(3, "the min length is 3").max(21, "the max length is 21"),
      email: Yup.string().required("the email is required").email('the email is invalid'),
      password: Yup.string().required("the password is required").min(3, "the min length is 3").max(21, "the max length is 21"),
      rePassword: Yup.string().required("the rePassword is required").min(3, "the min length is 3").max(21, "the max length is 21"),
      phone: Yup.string().required("the name is required").min(8, "the min length is 3").max(11, "the max length is 21"),
    })
  })



  return <>
    <h1 className='text-[#0aad0a] text-center my-3'>Register</h1>
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 -mb-12 ">
        
        <Input onChange={handleChange} onBlur={handleBlur} value={values.name} name='name' className='col-span-2 w-[60%] mx-auto' label="Name:" type="name" />
        <div className="col-span-2 w-[60%] mx-auto">
          {errors.name && touched.name && <div className="flex flex-col gap-4 w-full">
      {[ "faded"].map((error) => (
        <Alert
          key={errors.name}
          color="danger"
          title={`This is a ${errors.name} variant alert`}
          variant={errors.name}
        />
      ))}
    </div>}
        </div>
        <Input onChange={handleChange} onBlur={handleBlur} value={values.email} name='email' className='col-span-2 w-[60%] mx-auto' label="Email:" type="email" />
        <div className="col-span-2 w-[60%] mx-auto">
          {errors.email && touched.email &&  <div className="flex flex-col gap-4 w-full">
      {[ "faded"].map((error) => (
        <Alert
          key={error.email}
          color="danger"
          title={`This is a ${error.email} variant alert`}
          variant={error.email}
        />
      ))}
    </div>}
        </div>
        <Input onChange={handleChange} onBlur={handleBlur} value={values.password} name='password' className='col-span-1 w-[60%] ms-auto' label="Password:" type="password" />
        <Input onChange={handleChange} onBlur={handleBlur} value={values.rePassword} name='rePassword' className='col-span-1 w-[60%] me-auto' label="Eepassword:" type="password" />
        <div className="col-span-1 w-[60%] ms-auto">
          {errors.password && touched.password &&  <div className="flex flex-col gap-4 w-full">
      {[ "faded"].map((error) => (
        <Alert
          key={errors.password}
          color="danger"
          title={`This is a ${errors.password} variant alert`}
          variant={error.password}
        />
      ))}
    </div>}
        </div>
        <div className="col-span-1 w-[60%] me-auto">
          {errors.rePassword && touched.rePassword &&  <div className="flex flex-col gap-4 w-full">
      {[ "faded"].map((error) => (
        <Alert
          key={errors.rePassword}
          color="danger"
          title={`This is a ${errors.rePassword} variant alert`}
          variant={error.rePassword}
        />
      ))}
    </div>}
        </div>
        <Input onChange={handleChange} onBlur={handleBlur} value={values.phone} name='phone' className='col-span-2 w-[60%] mx-auto' label="Phone:" type="tel" />
        <div className="col-span-2 w-[60%] mx-auto">
          {errors.phone && touched.phone &&  <div className="flex flex-col gap-4 w-full">
      {[ "faded"].map((error) => (
        <Alert
          key={error.phone}
          color="danger"
          title={`This is a ${error.phone} variant alert`}
          variant={error.phone}
        />
      ))}
    </div>}
        </div>
        {loading?
        <Button onPress={onOpen} type='submit' className='col-span-2 w-[60%] mx-auto bg-[#0aad0a] p-0.5 text-lg' color="primary"><i className="fa-solid fa-spinner text-2xl fa-spin"></i></Button>
        :
        <Button onPress={onOpen} type='submit' className='col-span-2 w-[60%] mx-auto bg-[#0aad0a] p-0.5 text-lg' color="primary">Register</Button>
        }
      </div>
      <div className="col-span-2 w-[60%] mx-auto">
          {error && <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-danger-500">!!!Error!!!</ModalHeader>
              <ModalBody>
               <h3>hints :</h3>
                <p className='border-b-2 pb-2 mb-2'>
                1- Name should be at least 3 characters and at most 21 <br></br>
                2- Email should be valid and unique email <br></br>
                3-Password should be at least 3 and include numbers and letters <br></br>
                4- RePassword should be the same as Password<br></br>
                5- Phone should be valid<br></br>

                   </p>
                   <p>
                    if you checked all the hints and still have the error 
                    so this email is already registered
                    click on login to login
                    if you don't remember your password click on login and then click on forget password
                   </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleButtonClick} >
                  Login
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>}
        </div>
    </form>

  </>
}


