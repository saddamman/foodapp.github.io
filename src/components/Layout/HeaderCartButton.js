import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [isAnimateCartButtn, setIsAnimateCartButtn] = useState();

  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);
  const classesBtn = classes.button + " " + (isAnimateCartButtn ? classes.bump : "");

  useEffect(() => {
    setIsAnimateCartButtn(true);
    const timer = setTimeout(() => {
      setIsAnimateCartButtn(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);
  return (
    <button className={classesBtn} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
