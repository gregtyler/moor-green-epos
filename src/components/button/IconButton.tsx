import "./button.css";

import Icon from "../Icon";
import Button, { Props as ButtonProps } from "./Button";

export interface Props extends ButtonProps {
  icon: string;
}

const IconButton = ({ icon, ...props }: Props) => (
  <Button className="c-button--icon-only" {...props}>
    <Icon>{icon}</Icon>
  </Button>
);

export default IconButton;
