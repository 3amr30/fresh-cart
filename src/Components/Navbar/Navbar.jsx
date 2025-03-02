import React, { useContext, useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContextProvider'
import { CartContext } from '../../context/CartContext'

export default function Navbar() {

  let { cart } = useContext(CartContext);
  const { userToken, loadding, setLoadding, setUserToken } = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  function logout() {
    localStorage.removeItem("token")
    setUserToken(null)
    navigate("/login")
    setLoadding(false)
  }

  return <>

    <header className=" bg-gray-200 fixed inset-x-0 top-0 z-50">
      <nav className="container mx-auto flex items-center justify-center px-10 py-4 lg:px-8" aria-label="Global">

        <Link to={'home'} className="lg:pe-4">
          <span className="sr-only">Your Company</span>
          <img className="" src={logo} width={120} alt />
        </Link>
        <div onClick={() => setIsOpen(true)} className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-transparent hover:bg-gray-100">
            <span className="sr-only">Open main menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden mx-auto lg:flex lg:gap-x-2 space-x-3 capitalize">
          {loadding &&
            <>
              <NavLink to={'home'} className=" font-medium  text-gray-700 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]">home </NavLink>
              <NavLink to={'cart'} className=" font-medium text-gray-700 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]"> cart </NavLink>
              <NavLink to={'WishList'} className="font-medium text-gray-700 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]">WishList</NavLink>
              <NavLink to={'products'} className=" font-medium text-gray-700 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]"> products </NavLink>
              <NavLink to={'categories'} className=" font-medium text-gray-700 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]"> categories </NavLink>
              <NavLink to={'brands'} className=" font-medium text-gray-700 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]"> brands </NavLink>
              <NavLink to={'allorders'} className=" font-medium text-gray-700 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]"> allOrders </NavLink></>
          }
        </div>
        <div className="hidden lg:flex  lg:justify-end space-x-3">
          {loadding ? <>
            <NavLink to={'cart'} className=" font-medium text-gray-900 relative"><i className='fa-solid fa-cart-shopping fa-2xl'></i> <span className='bg-green-800 text-white rounded-large px-1 absolute -top-2 right-0'>{cart?.data?.products?.length}</span></NavLink>
            <Link onClick={() => logout()} className=" font-medium text-gray-900 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]">Log Out</Link>
          </> :
            <><ul className='flex space-x-2'>
              <li><i className='fab fa-facebook-f fa-sm '></i></li>
              <li><i className='fab fa-x-twitter fa-sm '></i></li>
              <li><i className='fab fa-instagram fa-sm '></i></li>
              <li><i className='fab fa-telegram-plane fa-sm '></i></li>
            </ul>
              <NavLink to={'Register'} className=" font-medium text-gray-900 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]">Register</NavLink>
              <NavLink to={'login'} className=" font-medium text-gray-900 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]">Login <span aria-hidden="true">→</span></NavLink></>
          }
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div className={isOpen ? "lg:hidden" : "hidden"} role="dialog" aria-modal="true">
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to={'home'} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="" src={logo} width={120} alt />
            </NavLink>
            <button onClick={() => setIsOpen(false)} type="button" className="-m-2.5  bg-transparent hover:bg-gray-100 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {loadding &&
                <>
                  <div className="space-y-2 py-6 capitalize">
                    <NavLink to={'home'} className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]">home</NavLink>
                    <NavLink to={'cart'} className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]">cart</NavLink>
                    <NavLink to={'WishList'} className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]">WishList</NavLink>
                    <NavLink to={'brands'} className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]">brands</NavLink>
                    <NavLink to={'categories'} className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]">categories</NavLink>
                    <NavLink to={'products'} className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]">products</NavLink>
                    <NavLink to={'allorders'} className=" font-medium text-gray-900 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]"> allOrders </NavLink>

                  </div>
                </>
              }

              <div className="py-6">
                {loadding ?
                  <div className='flex flex-col space-y-2.5 items-center'>
                    <NavLink to={'cart'} className="  font-medium text-gray-900 relative"><i className='fa-solid fa-cart-shopping fa-2xl'></i> <span className='bg-green-800 text-white rounded-large px-1 absolute -top-2 right-0'>{cart?.data?.products?.length}</span></NavLink>
                    <Link onClick={() => logout()} className=" block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]">Log Out</Link>
                  </div>
                  :
                  <><NavLink to={'Register'} className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]">Register</NavLink>
                    <NavLink to={'login'} className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50 hover:text-[#4fa74f] duration-200 hover:scale-105 text-[16px]">Log in <span aria-hidden="true">→</span></NavLink></>
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  </>
}
