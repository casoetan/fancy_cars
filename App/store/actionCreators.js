import { createAction } from 'redux-actions'

import * as actions from './actions'

export const loading = createAction(actions.LOADING)

export const getCars = createAction(actions.GET_CARS)
export const getCarsOnline = createAction(actions.GET_CARS_ONLINE)
export const getCarsSuccess = createAction(actions.GET_CARS_SUCCESS)
export const getCarsFailed = createAction(actions.GET_CARS_FAILED)

export const getOfflineData = createAction(actions.GET_OFFLINE_DATA)
export const getOfflineDataSuccess = createAction(actions.GET_OFFLINE_DATA_SUCCESS)
export const saveReduxStateOffline = createAction(actions.SAVE_REDUX_STATE_OFFLINE)

export const selectCar = createAction(actions.SELECT_CAR)
export const sortCars = createAction(actions.SORT_CARS)

export const getAvailabilities = createAction(actions.GET_AVAILABILITIES)
export const getAvailabilitiesSuccess = createAction(
  actions.GET_AVAILABILITIES_SUCCESS
)
export const getAvailabilitiesFailed = createAction(
  actions.GET_AVAILABILITIES_FAILED
)
