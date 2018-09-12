import { createAction } from 'redux-actions'

import * as actions from './actions'

export const loading = createAction(actions.LOADING)

export const getCars = createAction(actions.GET_CARS)
export const getCarsSuccess = createAction(actions.GET_CARS_SUCCESS)
export const getCarsFailed = createAction(actions.GET_CARS_FAILED)

export const selectCar = createAction(actions.SELECT_CAR)
export const sortCars = createAction(actions.SORT_CARS)

export const getAvailabilities = createAction(actions.GET_AVAILABILITIES)
export const getAvailabilitiesSuccess = createAction(
  actions.GET_AVAILABILITIES_SUCCESS
)
export const getAvailabilitiesFailed = createAction(
  actions.GET_AVAILABILITIES_FAILED
)
