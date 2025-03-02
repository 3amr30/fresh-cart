import React from 'react'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';

export default function AllOrders() {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);

    function userOrder() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${decoded.id}`)
    }
    let { data, isLoading } = useQuery({
        queryKey: "oeders",
        queryFn: userOrder,
    })
    console.log(data?.data);
    if (isLoading) return <Loading />
    return (
        <>
            <div className="container">
                <div className="grid grid-cols-2 gap-4">
                    {data?.data.map((item, index) => <>
                        <div key={index} className="col-span-4  p-3 ">
                            <div className="col-span-4">
                                <h1 className='text-center text-[#3c8c7a] text-4xl font-semibold mb-2'>Order Number: {index + 1}</h1>
                            </div>
                            <div key={index} className=" grid grid-cols-4 mb-2 gap-4">
                            {item?.cartItems.map((pro, index) => <>
                                    <div className="col-span-4 xl:col-span-1 md:col-span-2 border rounded-3xl  bg-[#b4d9a9] p-2">
                                        <div className="">
                                            <img src={pro?.product.imageCover} className=' w-full md:rounded-xl rounded-2xl ' alt={pro?.product.title} />
                                        </div>
                                        <div className="flex flex-col justify-center ">
                                            <h2 className='text-[#fbffe3] line-clamp-1 text-3xl' ><span className='text-[#3c8c7a] font-semibold '> Name:</span> {pro?.product.title}</h2>
                                            <h2 className='text-[#fbffe3] line-clamp-1 text-2xl' ><span className='text-[#3c8c7a] font-semibold'> Brand:</span> {pro?.product.brand.name}</h2>
                                            <h2 className='text-[#0aad0a] text-2xl'><span className='text-[#3c8c7a] font-semibold'> Price:</span> {pro?.price}EGP</h2>
                                            <div className="flex items-center justify-between pb-3">
                                            <h2 className='text-[#fbffe3] text-2xl'><span className='text-[#3c8c7a] font-semibold'>count: </span>{pro?.count}</h2>
                                            <h3><i className="fa-solid fa-star text-yellow-400"> {pro?.product.ratingsAverage}</i></h3>
                                            </div>
                                        </div>
                                    </div>
                            </>)}
                                </div>
                        </div>
                    </>)
                    }
                </div>
            </div>
        </>
    )
}
