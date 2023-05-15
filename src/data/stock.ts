import { categories as c, items as i } from "./stock.json";

export const categories = c;
export const items = Object.entries(i).map(([id, item]) => ({
  ...item,
  id,
}));

export const getItem = (id: string) => items.find((i) => i.id === id);
