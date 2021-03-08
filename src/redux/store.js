import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

// adding redux-persist for persistence data on local / session storage
import { persistStore } from 'redux-persist'

import rootReducer from './root-reducers'

const middlewares = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);

export default {store, persistor}