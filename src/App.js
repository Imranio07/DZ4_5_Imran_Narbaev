import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductList from "./productList";
import {Provider} from "react-redux"
import store from "./redux/store"
import Basket from "./basket";

const routes = {
  posts: "/posts",
};

function App() {
  return (
    <>
        <Provider store={store}>
      <Routes>
          <Route path="/" element={<Layout />} >
                  <Route path="list-products" element={<ProductList />} />
              <Route path="basket" element={<Basket/>} />
          </Route>
      </Routes>
    </Provider>
    </>
  );
}

export default App;
