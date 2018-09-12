import { put } from 'redux-saga/effects';
import * as actionsTypes from '../actions/actionTypes';

function* logout(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expirationDate');
  yield localStorage.removeItem('userId');
  yield put({
    type: actionTypes.AUTH_LOGOUT
  });
}
