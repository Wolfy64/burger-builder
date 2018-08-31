import * as actionTypes from '../actions/index';

const initailState = {
  orders: [],
  loading: false
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.purchasedBurgerSuccess:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      };
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder)
      };
    case actionTypes.purchasedBurgerFail:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
