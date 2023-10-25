import {connect, useSelector} from "react-redux";
import { incrementShop } from "./redux/action";
import {shopReducer} from "./cartItem";
import products from './data/products.json'

function ProductList(props) {
  const data = useSelector(s=>s.buy)
  console.log(data)
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>Цена: {product.price}</p>
            <p>Цвет: {product.color}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
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