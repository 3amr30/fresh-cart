import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export let CartContext = createContext(null);

export default function CartContextProvider({ children }) {
    const headers = {
        headers: {
            token: localStorage.getItem("token"),
        }
    };

    const [cart, setCart] = useState(null);

    async function addProductToCart(productId) {
        try {
            let { data } = await axios.post(
                `https://ecommerce.routemisr.com/api/v1/cart`,
                { productId },
                headers
            );
            console.log(data);
            getProductsCart();
            toast.success(data.message, {
                duration: 2500,
                style: {
                    background: '#10ad10',
                    color: '#FFFFFF',
                    border: '1px solid black',
                },
                position: 'top-right',
                className: 'text-center',
            });
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteProductCart(productId) {
        try {
            let { data } = await axios.delete(
                `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                headers
            );
            console.log(data);
            setCart(data);
            toast("Product removed", {
                duration: 2500,
                icon: '❌',
                style: {
                    color: 'red',
                    border: '2px solid red',
                },
                position: 'top-right',
                className: 'text-center',
            });
        } catch (err) {
            console.log(err);
        }
    }

    async function updateProductCart(productId, count) {
        try {
            let { data } = await axios.put(
                `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                { count },
                headers
            );
            console.log(data);
            setCart(data);
            toast.success(data.message, {
                duration: 1100,
                style: {
                    background: '#10ad10',
                    color: '#FFFFFF',
                    border: '1px solid black',
                },
                position: 'top-right',
                className: 'text-center',
            });
        } catch (err) {
            console.log(err);
        }
    }

    async function getProductsCart() {
        try {
            let { data } = await axios.get(
                `https://ecommerce.routemisr.com/api/v1/cart`,
                headers
            );
            console.log(data);
            setCart(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProductsCart();
    }, []);

    async function removeAllofProductInCard() {
        try {
            let { data } = await axios.delete(
                "https://ecommerce.routemisr.com/api/v1/cart",
                headers
            );
            console.log(data);
            setCart(null);
            toast.success('All products removed. Reload to update cart.', {
                duration: 3600,
                position: 'top-center',
                icon: '❌',
                style: {
                    color: 'red',
                    border: '2px solid red',
                },
            });
        } catch (err) {
            console.error("Error removing all products from cart:", err);
        }
    }

    async function addToWishlist(productId) {
        try {
            let { data } = await axios.post(
                "https://ecommerce.routemisr.com/api/v1/wishlist",
                { productId },
                headers
            );
            console.log(data);
            toast.success('Added to wishlist', {
                duration: 3600,
                position: 'top-right',
                icon: '⭐',
                style: {
                    color: 'green',
                    border: '2px solid green',
                },
            });
        } catch (err) {
            console.error("Error adding product to wishlist:", err);
        }
    }

    return (
        <CartContext.Provider value={{ addProductToCart, addToWishlist, cart, setCart, updateProductCart, deleteProductCart, removeAllofProductInCard }}>
            {children}
            <Toaster />
        </CartContext.Provider>
    );
}
