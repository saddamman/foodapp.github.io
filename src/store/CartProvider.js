import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartReducer = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "Add_CART") {
    const updatedAmount = state.totalAmount + action.items.price * action.items.amount;
    const existingCartItmeIndex = state.items.findIndex((ele) => ele.id === action.items.id);

    let existingCartItem = state.items[existingCartItmeIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.items.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItmeIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.items);
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  if (action.type === "REMOVE_CART") {
    const existingCartItmeIndex = state.items.findIndex((item) => item.id === action.id);
    const existingCartItem = state.items[existingCartItmeIndex];
    const updatedAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItmeIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultCartReducer;
};

const CartProvider = (props) => {
  const [cartState, disptachCartAction] = useReducer(cartReducer, defaultCartReducer);

  const addItemtCardHandler = (item) => {
    disptachCartAction({ type: "Add_CART", items: item });
  };
  const removeItemCardHandler = (id) => {
    disptachCartAction({ type: "REMOVE_CART", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemtCardHandler,
    removeItem: removeItemCardHandler,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
