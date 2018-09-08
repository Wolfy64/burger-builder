import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchasedInit = state => updateObject(state, { purchased: false });

const purchaseBurgerStart = state => updateObject(state, { loading: true });

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
};

const purchaseBurgerFail = state => updateObject(state, { loading: false });

const fetchOrderStart = state => updateObject(state, { loading: true });

const fetchOrderSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false
  });
};

const fetchOrdersFails = (state, action) =>
  updateObject(state, { loading: false });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchasedInit(state);
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrderStart(state);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrderSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAILS:
      return fetchOrdersFails(state, action);
    default:
      return state;
  }
};

export default reducer;
