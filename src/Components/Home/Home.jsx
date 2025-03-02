import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import MainSlider from '../MainSlider/MainSlider';
import Product from '../Product/Product';
import Loading from '../Loading/Loading';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // تخزين البحث

  async function getAllProducts() {
    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <MainSlider />
      <CategoriesSlider />


      <div className="w-full flex justify-center my-4">
        <input
          type="text"
          placeholder="Search for products..."
          className="border-2 border-gray-300 rounded-lg p-2 w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>


      <div className="flex flex-wrap gap-y-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} className="w-full my-2 xl:w-1/5 md:w-1/4 sm:w-1/2">
              <Product prodect={product} />
            </div>
          ))
        ) : (
        <div className=' w-full flex justify-center items-center'>
          <Loading />
        </div>
        )}
      </div>
    </>
  );
}

