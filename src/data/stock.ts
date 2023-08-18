import { categories as c, items as i } from "./stock.json";

export const categories = c;
let _items = Object.entries(i).map(([id, item]) => ({
  ...item,
  id,
}));

if (window.location.search.includes("party")) {
  _items = _items.map((item) => {
    let price = item.price;

    if (item.category === "spirits" || item.label.includes("Half")) {
      price += 25;
    } else if (item.label.includes("Pint")) {
      price += 50;
    }

    return {
      ...item,
      price,
    };
  });
}

export const items = _items;
export const getItem = (id: string) => items.find((i) => i.id === id);
