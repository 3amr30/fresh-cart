import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Product({ prodect }) {
    let { addProductToCart, addToWishlist } = useContext(CartContext);

    const headers = {
        token: localStorage.getItem("token"),
    };

    const { data: wishlistData, refetch } = useQuery({
        queryKey: ["allWishList"],
        queryFn: async () => {
            const response = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist", { headers });
            return response.data.data;
        },
    });

    const isProductInWishlist = (productId) => {
        return wishlistData?.some((item) => item._id === productId);
    };

    return (
        <div className="product rounded-2xl px-2.5 pt-2 my-3 mx-2">
            <Link to={`/ProdectDeteles/${prodect.id}`}>
                <div>
                    <img className="w-full rounded-xl" src={prodect?.imageCover} alt={prodect.title} />
                    <div className="p-3">
                        <h3 className="text-[#10ad10]">{prodect?.category?.name}</h3>
                        <h2 className="text-[#000] line-clamp-1 text-xl">{prodect.title}</h2>
                        <div className="flex justify-between">
                            <h4>{prodect.price} EGP</h4>
                            <h4>
                                <i className="text-yellow-400 fa-solid fa-star"></i> {prodect.ratingsAverage}
                            </h4>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="flex">
                <button onClick={() => addProductToCart(prodect.id)} className="btn w-full">
                    Add to Cart
                </button>
                <span
                    onClick={async () => {
                        await addToWishlist(prodect.id);
                        refetch();
                    }}
                    className="cursor-pointer"
                >
                    <i
                        className={`fa-solid fa-heart text-2xl ms-2.5 mt-2.5 w-[20%] duration-300 ${isProductInWishlist(prodect.id) ? "text-red-600" : "text-gray-600 hover:text-red-600"
                            }`}
                    ></i>
                </span>
            </div>
        </div>
    );
}
