import React, { useState, useEffect } from 'react';
import {connect, useSelector} from "react-redux";
import { incrementShop } from "./redux/action";

function ProductList(props) {
  const [products, setProducts] = useState([]);
   const data = useSelector(s=>s.buy)

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10&skip=10')
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
    console.log(products.id)
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
              props.onIncrementLikes();
              console.log("Текущее значение buy:", props.buy);
            }}>Купить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
function mapStateToProps(state){
    const {shopReducer} = state;
    return {
        buy:shopReducer?.buy || 0
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncrementLikes: () => {
            return dispatch(incrementShop());
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);