import React, { useState, useEffect } from "react";
import { getProductById, currency } from "home/products";

const PDPContent = () => {
  const id = 2;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then((product) => setProduct(product));
    } else {
      setProduct(null);
    }
  }, []);

  if (!product) return null;
  return (
    <>
      <div>{product.image}</div>
    </>
  );
};

export default PDPContent;
