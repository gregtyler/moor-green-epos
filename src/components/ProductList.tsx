import { HTMLAttributes, ReactNode } from "react";
import { categories, items } from "../data/stock";
import Price from "./Price";
import Card from "./card/Card";
import CardGrid from "./card/CardGrid";
import { FilterNames } from "./App";
import Icon from "./Icon";

interface Props extends HTMLAttributes<HTMLElement> {
  filter: FilterNames;
  onAddItem: (id: string) => void;
}

const getStock = (filter: FilterNames) => {
  if (filter === "default") {
    return items.filter((i) => i.defaultView);
  } else {
    return items.filter((i) => i.category === filter);
  }
};

const getCategoryIcon = (category: string): ReactNode => {
  if (category in categories) {
    return <Icon style={{ float: "right" }}></Icon>;
  } else {
    return "";
  }
};

const ProductList = ({ filter, onAddItem, ...props }: Props) => {
  const stock = getStock(filter);

  return (
    <div {...props}>
      <CardGrid>
        {stock.map((item) => (
          <Card
            key={item.id}
            orientation="vertical"
            onClick={() => onAddItem(item.id)}
          >
            <div className="c-card--product">
              <strong className="u-flex-filler">{item.label}</strong>
              <div>
                {getCategoryIcon(item.category)}
                <Price value={item.price} />
              </div>
            </div>
          </Card>
        ))}
      </CardGrid>
    </div>
  );
};

export default ProductList;
