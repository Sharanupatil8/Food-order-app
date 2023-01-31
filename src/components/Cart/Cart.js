import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const Cartitems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((meal) => (
        <CartItem
          name={meal.name}
          key={meal.id}
          amount={meal.amount}
          price={meal.price}
          onRemove={cartItemRemoveHandler.bind(null, meal.id)}
          onAdd={cartItemAddHandler.bind(null, meal)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.closeCart}>
      {Cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeCart}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
