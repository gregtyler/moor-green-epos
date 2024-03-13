import { useMemo, useState } from "react";
import { CartList } from "../../data/types";
import Price from "../Price";
import Modal from "../modal/Modal";
import Button from "../button/Button";
import "./cart.css";
import Basket from "./Basket";
import { getItem } from "../../data/stock";
import IconButton from "../button/IconButton";

interface Props {
  value: CartList;
  onSetCart: (cart: CartList) => void;
}

type ModalData =
  | {
      type: "" | "PAY";
    }
  | {
      type: "REMOVE";
      id: string;
    }
  | {
      type: "REMOVE_CASH";
    };

const Cart = ({ value, onSetCart }: Props) => {
  const [modal, setModal] = useState({ type: "" } as ModalData);

  const total = useMemo(
    () =>
      value.reduce((agg, x) => {
        if (x.startsWith("cash:")) {
          return agg + parseInt(x.substring(5), 10);
        }

        const item = getItem(x);
        return agg + (item ? item.price : 0);
      }, 0),
    [value]
  );

  const remove = (id: string) => {
    const index = value.lastIndexOf(id);
    if (index > -1) {
      onSetCart([...value.slice(0, index), ...value.slice(index + 1)]);
    }
  };

  const removeCash = () => {
    onSetCart(value.filter((x) => !x.startsWith("cash:")));
  };

  const pay = () => {
    onSetCart([]);
  };

  return (
    <>
      <Basket
        items={value}
        onPromptRemove={(id) => setModal({ type: "REMOVE", id })}
        onPromptRemoveCash={() => setModal({ type: "REMOVE_CASH" })}
      />

      <div className="c-cart__summary">
        <div className="c-cart__total">
          <Price value={total} />
        </div>
        <Button
          variant="filled"
          onClick={() => setModal({ type: "PAY" })}
          className="c-button--tertiary c-button--pay-confirm"
          disabled={total === 0}
        >
          Pay
        </Button>
      </div>

      {modal.type === "REMOVE" && (
        <Modal
          headline="Confirm void"
          onConfirm={() => {
            remove(modal.id);
            setModal({ type: "" });
          }}
          onCancel={() => setModal({ type: "" })}
        >
          <p>
            Do you want to void one "{getItem(modal.id)?.label || modal.id}"?
          </p>
        </Modal>
      )}
      {modal.type === "REMOVE_CASH" && (
        <Modal
          headline="Remove misc"
          onConfirm={() => {
            removeCash();
            setModal({ type: "" });
          }}
          onCancel={() => setModal({ type: "" })}
        >
          <p>Do you want to reset the misc amount?</p>
        </Modal>
      )}
      {modal.type === "PAY" && (
        <Modal
          headline="Payment"
          onConfirm={() => {
            pay();
            setModal({ type: "" });
          }}
          onCancel={() => setModal({ type: "" })}
        >
          <div className="c-cart__total c-cart__total--spaced">
            <Price value={total} />
          </div>
        </Modal>
      )}
    </>
  );
};
export default Cart;
