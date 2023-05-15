import IconButton, { Props as IconButtonProps } from "./IconButton";

const FAB = ({ icon, onClick, ...props }: IconButtonProps) => (
  <IconButton
    className="c-button--fab"
    icon={icon}
    onClick={onClick}
    {...props}
  ></IconButton>
);

export default FAB;
