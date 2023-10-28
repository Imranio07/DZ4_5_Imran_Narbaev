import React, { useState, useEffect } from 'react';
import { connect, useSelector } from "react-redux";
import { incrementShop } from "./redux/action";

function ProductList({ incrementShop }) {
  const [products, setProducts] = useState([]);
  const data = useSelector(s => s.buy)

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10&skip=10')
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.products?.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>discountPercentage: {product.discountPercentage}</p>
            <p>rating: {product.rating}</p>
            <button onClick={() => {
              incrementShop(product);
            }}>Купить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    buy: state.buy,
  };
};

export default connect(mapStateToProps, { incrementShop })(ProductList);