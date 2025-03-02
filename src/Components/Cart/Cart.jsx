import React, { useContext } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
  console.log();

  let { cart, updateProductCart, deleteProductCart, removeAllofProductInCard } = useContext(CartContext)

  return <>
    <h1 className="text-center text-[#10ad10] mb-5 " style={style.title}>Cart</h1>
    {cart ? <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className='flex justify-around pt-3'>
          <h3 className='text-2xl font-semibold'>total cart price: {cart.data.totalCartPrice} EGP</h3>
          <Link to='/checkout' className='bg-[#10ad10] hover:text-black text-white px-5 duration-200 py-3 rounded-md font-semibold'>Checkout</Link>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead> */}
          <tbody>
            {cart.data.products.map((item, index) => <tr key={index} className="bg-white border-b  dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-300">
              <td className="p-4">
                <img src={item.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={item.product.title} />
              </td>
              <td className="px-6 py-4 font-semibold text-medium text-gray-900 ">
                {item.product.title}<br />
                <span className="text-gray-500 
          text-s">Price of one: {item.price} EGP</span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <button onClick={item.count > 1 ? () => updateProductCart(item.product.id, item.count - 1) : () => deleteProductCart(item.product.id)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  dark:hover:bg-gray-400 dark:hover:border-gray-800 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only">Quantity button</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                    </svg>
                  </button>
                  <div>
                    <span className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400  ">
                      {item.count}
                    </span>
                  </div>
                  <button onClick={() => updateProductCart(item.product.id, item.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  dark:hover:bg-gray-400 dark:hover:border-gray-800 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only">Quantity button</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 ">
                {item.price * item.count} EGP
              </td>
              <td className="px-6 py-4">
                <button onClick={() => deleteProductCart(item.product.id)} className="font-medium bg-transparent hover:bg-transparent text-red-600 dark:text-red-500 hover:underline">Remove</button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <div className="">
        <button className='bg-red-600 hover:bg-black duration-200 hover:text-red-600 w-full py-3' onClick={() => removeAllofProductInCard()} ><i className="fa-solid fa-trash-can"></i> Delete All Of Prodect </button>
      </div>

    </div> : <loading />}

  </>
}
