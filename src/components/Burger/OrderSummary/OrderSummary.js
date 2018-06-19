import React from "react";

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
      <p>Continue to Checkout?</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </React.Fragment>
  );
};

export default orderSummary;
