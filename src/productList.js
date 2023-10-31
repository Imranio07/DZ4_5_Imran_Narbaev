import React, { useState, useEffect } from 'react';
import { connect, useSelector } from "react-redux";
import { incrementShop } from "./redux/action";
import products from "./data/product.json"

function ProductList({ incrementShop }) {
    const data = useSelector(s => s.buy)

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>
              <img src={product.picture} alt="product" />
            </p>
            <p>Price: {product.price}</p>
            <p>Color: {product.color}</p>
            <p>Description: {product.description}</p>
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
