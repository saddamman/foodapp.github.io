import React, { useContext } from "react";

import classses from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toFixed(2)}`;
  const addToCarthandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classses.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classses.description}>{props.description}</div>
        <div className={classses.price}>{price}</div>
      </div>
      <MealItemForm id={props.id} onAddToCart={addToCarthandler} />
    </li>
  );
};

export default MealItem;
