import "./card.css";

import { HTMLAttributes } from "react";

const CardGrid = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={`c-card-grid ${className || ""}`} {...props}>
    {children}
  </div>
);

export default CardGrid;
