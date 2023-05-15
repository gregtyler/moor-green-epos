const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

const Price = ({ value }: { value: number }) => (
  <>{formatter.format(value / 100)}</>
);
export default Price;
