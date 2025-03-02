
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Products from './Components/Products/Products.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'
import {HeroUIProvider} from "@heroui/react";
import Loading from './Components/Loading/Loading.jsx'
import UserContextProvider from './Components/context/UserContextProvider.jsx'
import ProdectedRoute from './Components/ProductedRoute/ProdectedRoute.jsx'
import ProdectDeteles from './Components/ProdesctDetels/ProdesctDeteles.jsx'
import MainSlider from './Components/MainSlider/MainSlider.jsx'
import CategoriesSlider from './Components/CategoriesSlider/CategoriesSlider.jsx'
import CartContextProvider from './context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import CheckOut from './Components/CheckOut/CheckOut.jsx'
import WishList from './Components/WishList/WishList.jsx'
import ResetPassword from './Components/ResetPassword/ResetPassword.jsx'
import VerifyResetCode from './Components/VerifyResetCode/VerifyResetCode.jsx'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword.jsx'
import AllOrders from './Components/AllOrders/AllOrders.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


let routers = createBrowserRouter([{
  path:'' , element : <Layout/>,children:[
    {path: "Register" , element: <Register/>},
    {path:'login' , element: <Login/>},
    {path:'loading' , element: <Loading/>},
    {path:'ForgotPassword' , element: <ForgotPassword/>},
    {path:'VerifyResetCode' , element: <VerifyResetCode/>},
    {path:'ResetPassword' , element: <ResetPassword/>},
    {index : true , element:  <ProdectedRoute><Home/></ProdectedRoute>},
    {path:'home' , element:  <ProdectedRoute><Home/></ProdectedRoute>},
    {path:'cart' , element:   <ProdectedRoute><Cart/></ProdectedRoute> },
    {path:'WishList' , element: <ProdectedRoute><WishList/></ProdectedRoute> },
    {path:'checkout' , element:   <ProdectedRoute><CheckOut/></ProdectedRoute> },
    {path:'brands' , element:   <ProdectedRoute><Brands/></ProdectedRoute> },
    {path:'categories' , element:   <ProdectedRoute><Categories/></ProdectedRoute>},
    {path:'AllOrders' , element: <ProdectedRoute><AllOrders/></ProdectedRoute> },
    {path:'products' , element:   <ProdectedRoute><Products/></ProdectedRoute>},
    {path:'MainSlider' , element:   <ProdectedRoute><MainSlider/></ProdectedRoute>},
    {path:'CategoriesSlider' , element:   <ProdectedRoute><CategoriesSlider/></ProdectedRoute>},
    {path:'ProdectDeteles/:id' , element:   <ProdectedRoute><ProdectDeteles/></ProdectedRoute>},
    {path:'*' , element: <NotFound/>},
  ]
}])

const query = new QueryClient()
function App() {

  return <>
  <QueryClientProvider client={query}>
  <CartContextProvider>
  <UserContextProvider>
    <HeroUIProvider>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster/>
    </HeroUIProvider>
</UserContextProvider>
  </CartContextProvider>
  </QueryClientProvider>
  </>
}

export default App
