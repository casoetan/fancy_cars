import { handleActions } from 'redux-actions'

import * as actions from './actions'

const initialState = {
  cars: [],
  online: false,
  currentLoadedCars: [],
  loading: false,
  resultPage: 1,
  selectedCar: null,
}

const rootReducer = handleActions(
  {
    [actions.LOADING]: (state) => ({
      ...state,
      loading: true,
    }),

    [actions.GET_CARS_SUCCESS]: (state, action) => {
      return {
        ...state,
        loading: false,
        currentLoadedCars: action.payload,
      }
    },

    [actions.SELECT_CAR]: (state, action) => ({
      ...state,
      selectedCar: state.cars.find(car => car.id === action.payload)
    }),

    [actions.SORT_CARS]: (state, action) => {
      const sortType = action.payload
      const cars = state.cars.slice()
      cars.sort((a, b) => {
        switch (sortType) {
          case 1:
            return a.name.localeCompare(b.name)
          case 2:
            return a.available.localeCompare(b.available)
          default:
            return state.defaultCarOrder
        }
      })
      return { ...state, cars }
    },

    [actions.GET_AVAILABILITIES_SUCCESS]: (state, action) => {
      const carsWithAvailability = action.payload.map(status =>
        ({
          ...state.currentLoadedCars.find(car => car.id === status.id),
          ...status,
          availability: status.available === 'In Dealership' ? true : false
        })
      )

      const nextPage = action.payload.length > 0 ? state.resultPage + 1 : state.resultPage
      const cars = state.resultPage === 1 ? carsWithAvailability : state.cars.concat(carsWithAvailability)

      return {
        ...state,
        loading: false,
        online: true,
        cars,
        resultPage: nextPage
      }
    },

    [actions.GET_OFFLINE_DATA_SUCCESS]: (state, action) => {
      return {
        ...state,
        online: false,
        cars: action.payload,
        currentLoadedCars: [],
        resultPage: 1
      }
    }
  },
  initialState
)

export default rootReducer
