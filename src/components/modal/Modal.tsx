import { HTMLAttributes } from "react";
import { createPortal } from "react-dom";
import "./modal.css";
import Button from "../button/Button";

interface Props extends HTMLAttributes<HTMLElement> {
  headline?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const Modal = ({
  headline,
  onCancel,
  onConfirm,
  children,
  ...props
}: Props) => (
  <>
    {createPortal(
      <>
        <div className="c-modal__backdrop" onClick={onCancel}></div>
        <div {...props} className="c-modal">
          {headline && <h3 className="c-modal__headline">{headline}</h3>}
          {children}
          <Button type="button" variant="filled" onClick={onConfirm}>
            Confirm
          </Button>{" "}
          <Button
            type="button"
            variant="tonal"
            onClick={onCancel}
            style={{ float: "right" }}
          >
            Cancel
          </Button>
        </div>
      </>,
      document.body,
      "modal"
    )}
  </>
);

export default Modal;
