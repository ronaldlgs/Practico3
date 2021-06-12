import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import itemReducer from './module/item'

const rootReducer = combineReducers({

    item: itemReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger))

export default store