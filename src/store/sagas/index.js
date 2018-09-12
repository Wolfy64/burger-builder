import { takeEvery } from 'redux-saga/effects';
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckState
} from './auth';
import { initIngredientSaga } from './burgerBuilder';
import { purchaseBurgerSaga, fetchOrdersSaga } from './order';
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckState);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientSaga);
}

export function* watchOrder() {
  yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}
