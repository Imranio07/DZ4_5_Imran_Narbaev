import React from "react";
import { useSelector } from "react-redux";
import store from "./redux/store";

function Basket(props) {
  const buy = useSelector((state) => state.buy);
  return (
    <div>
      <h1>Your all purchase number: {buy}</h1>
    </div>
  );
}

export default Basket;
