import {
  all,
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import * as api from "App/api";

import {
  getAvailabilities,
  getAvailabilitiesFailed,
  getAvailabilitiesSuccess,
  getCarsFailed,
  getCarsSuccess,
  loading,
} from './actionCreators';
import * as actions from './actions'

function* fetchCars(action) {
  try {
    yield put(loading())
    const response = yield call(api.getCars, action.payload)
    yield put(getAvailabilities(action.payload))
    yield put(getCarsSuccess(response))
  } catch (error) {
    yield put(getCarsFailed(error))
  }
}

function* fetchAvailabilities(action) {
  try {
    yield put(loading())
    const response = yield call(api.getAvailabilities, action.payload)
    yield put(getAvailabilitiesSuccess(response))
  } catch (error) {
    yield put(getAvailabilitiesFailed(error))
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actions.GET_CARS, fetchCars),
    takeLatest(actions.GET_AVAILABILITIES, fetchAvailabilities)
  ])
}

export default rootSaga
