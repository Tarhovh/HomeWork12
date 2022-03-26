import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Products(props) {
  const [products, setProducts] = useState([]);
  // const { productId} = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  console.log(products);

  return (
    <div>
      <h1>Products</h1>
      <Link to="/second">Go To Home</Link>
      <br></br>
      <br></br>
<ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/second/products/${product.id}`} >
            {product.title}
          </Link>
          </li>
      ))}
      </ul>
    </div>
  );
}

export default Products;
