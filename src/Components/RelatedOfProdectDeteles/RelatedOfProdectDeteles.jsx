import React, { useState } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom'


export default function RelatedOfProdectDeteles({prodect } ) {
   const [prodectId, setprodectId] = useState(prodect.id)
    return (<>
    
        <div  className="product rounded-2xl px-2.5 pt-2  my-3 mx-2">
            <Link to={`/ProdectDeteles/${prodectId}`}>
                <div className=''>
                <img className='w-full rounded-xl' src={prodect?.imageCover} alt={prodect.title} />
                    <div className="p-3">
                        <h3 className='text-[#10ad10]'>{prodect?.category?.name}</h3>
                        <h2 className='text-[#000] line-clamp-1 text-xl'>{prodect.title}</h2>
                        <div className="flex justify-between">
                            <h4>{prodect.price}EGP</h4>
                            <>
                                <h4><i className="text-yellow-400 fa-solid fa-star"></i> {prodect.ratingsAverage}</h4>
                            </>
                        </div>
                    </div>
                </div>
            </Link>
            <button className='btn w-full'>Add to Card</button>

    </div>
    
    </>)
}
