import React, { useEffect, useState } from "react";
import { getProducts, currency } from "./products";

const HomeContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  console.log(products);

  return (
    <div className='grid grid-cols-4 gap-5'>
      {products.map((product) => (
        <div key={product.id} className='border-2 p-2'>
          <div>{product.name}</div>
          <img src={product.image} alt={product.name} />
          <div className='flex'>
            <div className='flex-end'>{currency.format(product.price)}</div>
          </div>
          <div className='text-sm mt-4'>{product.description}</div>
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
