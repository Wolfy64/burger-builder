import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  // === Instructor Method ===
  // let transformIngredients = Object.keys(props.ingredients)
  //   .map(igKey => {
  //     return [...Array(props.ingredients[igKey])].map((_, i) => {
  //       return <BurgerIngredient key={igKey + i} type={igKey} />;
  //     });
  //   })
  //   .reduce((arr, el) => arr.concat(el), []);

  // if (transformIngredients.length === 0) {
  //   transformIngredients = <p>Please start add ingredients</p>;
  // }

  // === Personal Method ===
  let transformIngredients = Object.entries(props.ingredients)
    .map(ingredient => {
      const igName = ingredient[0];
      const igQuantity = ingredient[1];

      const ingredients = (quantity, arr = []) => {
        if (quantity === 0) return arr;
        arr.push(<BurgerIngredient key={igName + quantity} type={igName} />);
        return ingredients(quantity - 1, arr);
      };

      return ingredients(igQuantity);
    })
    .reduce((arr, el) => arr.concat(el), []);

  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
