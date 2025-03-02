import React from 'react'
import img1 from './../../assets/images/slider-image-1.jpeg'
import img2 from './../../assets/images/slider-image-2.jpeg'
import img3 from './../../assets/images/slider-image-3.jpeg'
import img4 from './../../assets/images/download bags.png'
import img5 from './../../assets/images/download music.png'
import Slider from "react-slick";

export default function MainSlider() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        autoplaySpeed: 2500,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="flex mb-4 object-cover ">
                <div className="w-3/4">
                    <Slider {...settings}>
                            <img className='w-full h-[400px] ' src={img1} alt="img1" />
                            <img className='w-full h-[400px] ' src={img2} alt="img2" />
                            <img className='w-full h-[400px] ' src={img3} alt="img3" />
                    </Slider>
                </div>
                <div className="w-1/4">
                <img className='w-full h-[200px] object-cover ' src={img4} alt="img bags" />
                <img className='w-full h-[200px] object-cover' src={img5} alt="img musics" />
                </div>
            </div>
        </>
    )
}
