import React from "react";
import Button from "../../UI/Modal/Button/Button";

const orderSummary = props => {
  // Instructor Method
  // const ingredientSummary = Object.keys(props.ingredients).map(igKey =>
  //   <li key={igKey} >
  //     <span style={{ textTransform: "capitalize" }}>{igKey}</span>: {props.ingredients[igKey]}
  //   </li>
  // );

  // Personnal Method
  const ingredientSummary = Object.entries(props.ingredients)
    .filter(e => e[1] > 0)
    .map(e => (
      <li key={e[0]}>
        <span style={{ textTransform: "capitalize" }}>{e[0]}</span>: {e[1]}
      </li>
    ));

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the fallowing ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total Price: {props.price}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;
