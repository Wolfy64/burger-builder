import React from 'react';
import classes from './Burger.css';
import BurguerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  return (
    <div className={classes.Burger} >
      <BurguerIngredient type="bread-top"/>
      <BurguerIngredient type="cheese"/>
      <BurguerIngredient type="meat"/>
      <BurguerIngredient type="bread-bottom"/>
    </div>
  );
}

export default burger;