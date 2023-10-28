import React from "react";
import { useSelector } from "react-redux";
import store from "./redux/store";

function Basket(props) {
  const buy = useSelector((state) => state.buy);
  console.log(buy)
  return (
    <div>
      {
        buy?.map((el)=>{
          return ( 
            <div>
                <li key={el.id}>
                <h2>title-{el.title}</h2>
                  <p>description-{el.description}</p>
                  <p>price-{el.price}</p>
                  <p>discountPercentage: {el.discountPercentage}</p>
                  <p>rating: {el.rating}</p>
              </li>
            </div>
          )
        })
      }
    </div>
  );
}

export default Basket;