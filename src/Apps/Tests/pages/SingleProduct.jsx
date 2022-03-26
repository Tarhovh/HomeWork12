import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProduct(props) {
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [productId]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((res) => setImages(res.images));
  }, [productId]);

  return (
    <div>
      <h1>{product?.title}</h1>
      <h2>
        {`Description:`} <br /> {product.description}
      </h2>
      <div className="responsive">
      <div className="gallery">
        {images.map((image, index) => (
          <img src={image} alt={product.title} key={index} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default SingleProduct;
