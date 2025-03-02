import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function ProdectedRoute({children}) {
    // console.log({children});
    
if(localStorage.getItem("token")){
    return children
}
else{
    return <Navigate  to={"/login"}/>
}
}
