import "./navigation.css";

import Icon from "../Icon";
import { categories } from "../../data/stock";
import { HTMLAttributes } from "react";
import { FilterNames } from "../App";

interface Props extends HTMLAttributes<HTMLElement> {
  value: FilterNames;
  onUpdate: (value: FilterNames) => void;
}

const NavigationTray = ({ value, onUpdate }: Props) => {
  return (
    <nav className="c-navigation-tray">
      <span
        className={`c-navigation-tray__item ${
          value === "default" ? "c-navigation-tray__item--active" : ""
        }`}
        onClick={() => onUpdate("default")}
      >
        <Icon>home</Icon>
        Home
      </span>
      {Object.entries(categories).map(([id, category]) => (
        <span
          className={`c-navigation-tray__item ${
            id === value ? "c-navigation-tray__item--active" : ""
          }`}
          onClick={() => onUpdate(id)}
        >
          <Icon>{category.icon}</Icon>
          {category.label}
        </span>
      ))}
    </nav>
  );
};

export default NavigationTray;
