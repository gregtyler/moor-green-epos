import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./cart/Cart";
import { CartList } from "../data/types";

const App = () => {
  const [cart, setCart] = useState([] as CartList);

  const addItem = (id: string) => {
    setCart([...cart, id]);
  };

  return (
    <>
      <div className="o-pane--flexible u-flex-filler">
        <ProductList
          filter="default"
          onAddItem={(id) => addItem(id)}
        ></ProductList>
      </div>
      <div className="o-pane--fixed c-side-sheet">
        <h2 className="c-side-sheet__headline">Current transaction</h2>
        <Cart value={cart} onSetCart={setCart} />
      </div>
    </>
  );
};

export default App;
