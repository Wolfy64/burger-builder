import * as actionTypes from './actions';

const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0
  },
  totalPrice: 4
};

const reducer = (state = initialState, action) => {
  switch (action.types) {
    case action.type.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[ingredientName] + 1
        }
      };
    case action.type.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[ingredientName] - 1
        }
      };
    default:
      return state;
  }
};

export default reducer;
