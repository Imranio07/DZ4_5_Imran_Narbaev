import React from "react";
import { useSelector } from "react-redux";

function Basket(props) {
  const buy = useSelector((state) => state.buy);
  return (
    <div>
      <h2>Shopping Basket</h2>
          <h1>Number of Items in Basket: {buy.length}</h1>
      <ul>
        {buy?.map((el) => (
          <li key={el._id}>
            <h2>{el.name}</h2>
            <p>
              <img src={el.picture} alt="product" />
            </p>
            <p>Price: {el.price}</p>
            <p>Color: {el.color}</p>
            <p>Description: {el.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Basket;
