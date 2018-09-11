import {
  applyMiddleware,
  createStore,
  compose
} from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import saga from './sagas'

const sagaMiddleware = createSagaMiddleware()

let middleware = []
middleware.push(sagaMiddleware)

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(
  reducer,
  enhancer
)

sagaMiddleware.run(saga)

export default store
