import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";
import Prodect from '../Product/Product';
import RelatedOfProdectDeteles from '../RelatedOfProdectDeteles/RelatedOfProdectDeteles';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export default function ProdectDeteles() {
    let {addProductToCart} = useContext(CartContext)
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 900,
        slidesToShow: 1,
        autoplaySpeed: 2000,
        slidesToScroll: 1
    };

    const [catagoryProdect, setCatagoryProdect] = useState([])
    const [prodect, setProdect] = useState([])
    const { id } = useParams()
    // console.log(id);
    async function getOneOfProdect() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        // console.log(data);
        setProdect(data?.data)
        // console.log(data?.data?.category?._id)
        getCategoryOfProdect(data?.data?.category?._id)
    }
    async function getCategoryOfProdect(categoryId) {
        let { data } = await axios?.get(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`)
        console.log(data.data);
        setCatagoryProdect(data?.data)
    }
    useEffect(() => {
        getOneOfProdect()
    }, [])

    return (<>
        <h2 className='text-center text-[#10ad10] mb-6'>{prodect.title}</h2>
        <div className="grid grid-cols-4">
            <div className="col-span-1">
                <Slider {...settings}>
                    {prodect?.images?.map((imge, index) =>
                        <img key={index} className='w-full p-6' src={imge} alt={prodect.title} />
                    )}
                </Slider>
            </div>
            <div className="col-span-3 flex justify-center flex-col ms-9 mb-5">
                <h2>{prodect.title}</h2>
                <p className='m-3 text-gray-600'>{prodect.description}</p>
                <h4 className='text-[#10ad10] text-lg'>{prodect.category?.name}</h4>
                <div className="flex justify-between text-xl font-semibold">
                    <h4>Price: {prodect.price} EGP</h4>
                    <>
                        <h4><i className="text-yellow-400 fa-solid fa-star"></i> {prodect.ratingsAverage}</h4>
                    </>
                </div>
                <button onClick={()=>addProductToCart(prodect.id)} className='btn w-full'>Add to Card</button>
            </div>
        </div>
        <>
        <div className="grid grid-cols-4">
        {catagoryProdect.map(
            (prodect,index)=>
        <div key={index} className="col-span-1">
            <Prodect  prodect={prodect}/>   
        </div>
        )
        }        
        </div>
        </>
    </>
    )
}
