import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./cart/Cart";
import { CartList } from "../data/types";
import NavigationTray from "./navigation/NavigationTray";
import { categories } from "../data/stock";

export type FilterNames = "default" | "cash" | keyof typeof categories;

const App = () => {
  const [filter, setFilter] = useState("default" as FilterNames);
  const [cart, setCart] = useState([] as CartList);

  const addItem = (id: string) => {
    setCart([...cart, id]);
  };

  return (
    <>
      <div
        className="o-pane--flexible u-flex-filler"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <NavigationTray value={filter} onUpdate={(value) => setFilter(value)} />
        <ProductList
          className="u-flex-filler"
          filter={filter}
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
