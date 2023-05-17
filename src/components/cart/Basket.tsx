import { useMemo } from "react";
import { CartList } from "../../data/types";
import { getItem } from "../../data/stock";
import "./cart.css";
import Price from "../Price";
import Button from "../button/Button";
import IconButton from "../button/IconButton";

interface Props {
  items: CartList;
  onPromptRemove: (id: string) => void;
}

type ReducedCart = {
  id: string;
  label: string;
  price: number;
  quantity: number;
}[];

const Basket = ({ items, onPromptRemove }: Props) => {
  const reduced = useMemo(
    () =>
      items.reduce((reduced, id) => {
        const exists = reduced.find((x) => x.id === id);

        if (exists) {
          return reduced.map((x) =>
            x.id === id ? { ...x, quantity: x.quantity + 1 } : x
          );
        } else {
          const item = getItem(id);
          if (typeof item === "undefined") return reduced;

          return [...reduced, { ...item, quantity: 1 }];
        }
      }, [] as ReducedCart),
    [items]
  );

  return (
    <ol className="c-basket u-flex-filler">
      {reduced.map((item) => {
        return (
          <li className="c-basket__item" key={item.id}>
            <div className="u-flex-filler">
              <div>
                <strong>{item.label}</strong>
              </div>
              <div>
                {item.quantity} @ <Price value={item.quantity * item.price} />
              </div>
            </div>
            <IconButton
              icon="remove"
              variant="tonal"
              onClick={() => onPromptRemove(item.id)}
            />
          </li>
        );
      })}
    </ol>
  );
};

export default Basket;
