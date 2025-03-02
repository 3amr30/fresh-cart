import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider from "react-slick";
export default function CategoriesSlider() {
    const [prodeects, setProdeects] = useState([])
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 800,
        slidesToShow: 7,
        autoplaySpeed: 1500,
        slidesToScroll: 1
    };
    async function getAllimges() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        setProdeects(data.data)
    }
    useEffect(()=>{
        getAllimges()
    },[])
    return (
        <Slider className='w-[100%]' {...settings}>
            {prodeects.map((prodect, index)=>
            <img className='w-full h-[200px] object-cover object-top' src={prodect?.image} key={index} alt="" />
            )}
        </Slider>
    )
}
