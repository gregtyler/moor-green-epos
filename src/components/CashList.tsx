import { HTMLAttributes } from "react";
import Card from "./card/Card";

interface Props extends HTMLAttributes<HTMLElement> {
  onAddItem: (id: string) => void;
}

const label = (x: number) => {
  if (x >= 100) {
    return `£${x / 100}`;
  } else {
    return `${x}p`;
  }
};

const CashList = ({ onAddItem, ...props }: Props) => {
  const low = [50, 25, 20, 10, 5, 1];
  const high = [500, 200, 100];

  return (
    <div {...props}>
      {[low, high].map((set, i) => (
        <div className="c-cash-grid" key={`cash-${i}`}>
          {set.map((value) => (
            <Card
              key={`cash:${value}`}
              orientation="vertical"
              onClick={() => onAddItem(`cash:${value}`)}
              className="c-card--cash"
            >
              <svg
                className="u-size-filler"
                viewBox="0 0 56 18"
                textAnchor="middle"
                dominantBaseline="central"
              >
                <text x="50%" y="50%">
                  {label(value)}
                </text>
              </svg>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CashList;
