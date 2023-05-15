import { HTMLAttributes } from "react";

const Icon = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => (
  <span className={`material-symbols-outlined ${className ?? ""}`} {...props}>
    {children}
  </span>
);

export default Icon;
