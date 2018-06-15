import React from "react";
import classes from "./Burger.css";
import BurguerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  // === Instructor Method ===
  // let transformIngredients = Object.keys(props.ingredients)
  //   .map(igKey => {
  //     return [...Array(props.ingredients[igKey])].map((_, i) => {
  //       return <BurguerIngredient key={igKey + i} type={igKey} />;
  //     });
  //   })
  //   .reduce((arr, el) => arr.concat(el), []);
  
  // if (transformIngredients.length === 0) {
  //   transformIngredients = <p>Please start add ingredients</p>;
  // }

  // === Personnal Method ===
  let transformIngredients = Object.entries(props.ingredients)
    .map(ingredient => {
      const igName = ingredient[0];
      const igQuantity = ingredient[1];

      const ingredients = (quantity, arr = []) => {
        if (quantity === 0) return arr;
        arr.push(<BurguerIngredient key={igName + quantity} type={igName} />);
        return ingredients(quantity - 1, arr);
      };

      return ingredients(igQuantity);
    })
    .reduce((arr, el) => arr.concat(el), []);

  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please start add ingredients</p>
  }

  console.log(transformIngredients);

  return (
    <div className={classes.Burger}>
      <BurguerIngredient type="bread-top" />
      {transformIngredients}
      <BurguerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
