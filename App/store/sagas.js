import { AsyncStorage, NetInfo } from 'react-native'
import { eventChannel } from 'redux-saga'
import {
  all,
  call,
  put,
  take,
  takeLatest
} from 'redux-saga/effects'

import * as api from "App/api"

import {
  getAvailabilities,
  getAvailabilitiesFailed,
  getAvailabilitiesSuccess,
  getCarsFailed,
  getCarsSuccess,
  loading,
  getCarsOnline,
  getOfflineDataSuccess,
  getOfflineData,
} from './actionCreators'
import * as actions from './actions'

function* fetchCarsOnline(action) {
  try {
    yield put(loading())
    const response = yield call(api.getCars, action.payload)
    yield put(getAvailabilities(action.payload))
    yield put(getCarsSuccess(response))
  } catch (error) {
    yield put(getCarsFailed(error))
  }
}

function* fetchCarsOffline(action) {
  try {
    const response = yield call(AsyncStorage.getItem, 'cars')
    yield put(getOfflineDataSuccess(JSON.parse(response)))
  } catch (error) {
    yield put(getCarsFailed(error))
  }
}

function* fetchAvailabilities(action) {
  try {
    const response = yield call(api.getAvailabilities, action.payload)
    yield put(getAvailabilitiesSuccess(response))
  } catch (error) {
    yield put(getAvailabilitiesFailed(error))
  }
}

function* saveReduxStateOffline(action) {
  yield AsyncStorage.setItem('cars', JSON.stringify(action.payload))
}

function* fetchCars(action) {
  const channel = eventChannel((emitter) => {
    NetInfo.isConnected.addEventListener('connectionChange', emitter)
    return () => NetInfo.isConnected.removeEventListener('connectionChange', emitter)
  })
  try {
    while(true) { // A little hack to run when the network status changes
      const isConnected = yield take(channel)
      try {
        if (isConnected) {
          yield put(getCarsOnline(action.payload))
        } else {
          yield put(getOfflineData())
        }
      } catch (error) {
        yield put(getCarsFailed(error))
      }
    }
  } finally {
    channel.close()
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actions.GET_CARS, fetchCars),
    takeLatest(actions.GET_CARS_ONLINE, fetchCarsOnline),
    takeLatest(actions.GET_OFFLINE_DATA, fetchCarsOffline),
    takeLatest(actions.GET_AVAILABILITIES, fetchAvailabilities),
    takeLatest(actions.SAVE_REDUX_STATE_OFFLINE, saveReduxStateOffline),
  ])
}

export default rootSaga
