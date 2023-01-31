import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [amountIsValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const sumitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmountNumber.length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={sumitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="sumbit">+ Add</button>
      {!amountIsValid && <p>Please Enter a valid amont(1-5).</p>}
    </form>
  );
}

export default MealItemForm;
