// src/components/Footer.jsx
import React from 'react';
import imageGoogle from '../../assets/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo-thumbnail.png'
import imageApple from '../../assets/images/png-transparent-app-store-apple-google-play-apple-text-logo-mobile-phones.png'
import imageAmazonPay from '../../assets/images/Amazon_Pay_logo.svg.png'
import imageMasterCard from '../../assets/images/pngimg.com - mastercard_PNG16.png'
import imagePayPal from '../../assets/images/aayoo89vy.webp'


export default function Footer(){

  return (
    <footer className="bg-gray-100 py-9 mt-16  ">
    <div>
      <div className="max-w-screen-l mx-auto px-4 sm:px-6 lg:px-12 ">
        <div className="flex flex-row md:flex-row justify-center items-center space-y-4 md:space-y-0 pb-7 border-b-2">
          {/* App Promotion */}
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-2">Get the FreshCart app</h3>
            <p className="text-gray-600 mb-4">
              We will send you a link, open it on your phone to download the app.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Email"
                className=" w-full px-4  border rounded-md focus:outline-none focus:border-green-500"
               
              />
              <button
                
                className="w-52 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Share App Link
              </button>
            </form>
          </div>
          
</div>
<div className='flex flex-row max-w-screen-l mx-auto px-4 sm:px-6 lg:px-12 mt-4 justify-between items-center pb-4 border-b-2' >
          {/* Payment Partners */}
          <div className="w-full md:w-1/2 lg:w-1/3 flex items-center space-x-2">
            <span className="text-gray-800 font-semibold text-lg ">Payment Partners</span>
            <img
              src={imageAmazonPay}
              alt="Payment Partner Icons"
              className="h-3 mt-2 ps-3"
            />
            <img
              src={imageMasterCard}
              alt="Payment Partner Icons"
              className="h-4 mt-2 ps-3"
            />
            <img
              src={imagePayPal}
              alt="Payment Partner Icons"
              className="h-4 mt-2 ps-3"
            />
          </div>

          {/* App Stores */}
          <div className="w-full md:w-1/2 lg:w-1/3 flex items-center space-x-2">
            <span className="text-gray-800 font-semibold text-lg ">Get deliveries with FreshCart</span>
            <a href="#" className="hover:opacity-75">
              <img
                src={imageApple}
                alt="App Store"
                className="w-28 h-10"
              />
            </a>
            <a href="#" className="hover:opacity-75">
              <img
                src={imageGoogle}
                alt="Google Play"
                className="w-28 h-10"
              />
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
