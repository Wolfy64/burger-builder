import React from "react";
import classes from "./Burger.css";
import BurguerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  // === Instructor Method ===
  // const transformIngredients = Object.keys(props.ingredients)
  //   .map(igKey => {
  //     return [...Array(props.ingredients[igKey])].map((_, i) => {
  //       return <BurguerIngredient key={igKey + i} type={igKey} />
  //     })
  //   });

  // === Personnal Method ===
  const transformIngredients = Object.entries(props.ingredients)
    .map(ingredient => {
      const igName = ingredient[0];
      const igQuantity = ingredient[1];

      const ingredients = (quantity, arr = []) => {
        if (quantity === 0) return arr;
        arr.push(<BurguerIngredient key={igName + quantity} type={igName} />);
        return ingredients(quantity - 1, arr);
      };

      return ingredients(igQuantity);
    }
  );

  return (
    <div className={classes.Burger}>
      <BurguerIngredient type="bread-top" />
      {transformIngredients}
      <BurguerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
