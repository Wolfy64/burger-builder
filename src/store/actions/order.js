import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-orders';

export const purchasedBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchasedBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchasedBurgerStart = () => {
  return { type: actionTypes.PURCHASE_BURGER_START };
};

export const purchasedBurger = orderData => {
  return dispatch => {
    dispatch(purchasedBurgerStart());
    axios
      .post('orders.json', orderData)
      .then(
        response =>
          console.log(response.data) &&
          dispatch(purchasedBurgerSuccess(response.data, orderData))
      )
      .catch(error => dispatch(purchasedBurgerFail(error)));
  };
};
