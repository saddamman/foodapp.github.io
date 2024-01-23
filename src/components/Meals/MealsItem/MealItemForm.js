import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
// import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const updatedEntredNumber = +enteredAmount;
    console.log(updatedEntredNumber);
    if (updatedEntredNumber.length === 0 || updatedEntredNumber < 1 || updatedEntredNumber > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(updatedEntredNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
          ref: inputRef,
        }}
      />
      <button>+Add </button>
      {!amountIsValid && <p>Please Enter valid amount ( 1-5).</p>}
    </form>
  );
};

export default MealItemForm;
