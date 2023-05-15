import "./button.css";

import { ButtonHTMLAttributes, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import Icon from "../Icon";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  variant?: "elevated" | "filled" | "tonal" | "outlined";
  to?: string;
}

const Button = ({
  icon,
  variant,
  className,
  children,
  onClick,
  to,
  type = "button",
  ...props
}: Props) => {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);

    if (to && !e.defaultPrevented) navigate(to);
  };

  return (
    <button
      className={`c-button o-interactive ${
        variant ? "c-button--" + variant : ""
      } ${icon ? "c-button--with-icon" : ""} ${className ?? ""}`}
      type={type}
      onClick={handleClick}
      {...props}
    >
      {icon && <Icon className="c-button__icon">{icon}</Icon>}
      {children}
    </button>
  );
};

export default Button;
