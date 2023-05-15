import { HTMLAttributes } from "react";
import { categories, items } from "../data/stock";
import Price from "./Price";
import Card from "./card/Card";
import CardGrid from "./card/CardGrid";

type FilterNames = "default" | keyof typeof categories;

interface Props extends HTMLAttributes<HTMLElement> {
  filter: FilterNames;
  onAddItem: (id: string) => void;
}

const getStock = (filter: FilterNames) => {
  if (filter === "default") {
    return items;
  } else {
    return items.filter((i) => i.category === filter);
  }
};

const ProductList = ({ filter, onAddItem }: Props) => {
  const stock = getStock(filter);

  return (
    <CardGrid>
      {stock.map((item) => (
        <Card
          key={item.label}
          onClick={() => onAddItem(item.id)}
          className="u--square"
        >
          <strong>{item.label}</strong>
          <br />
          <Price value={item.price} />
        </Card>
      ))}
    </CardGrid>
  );
};

export default ProductList;
