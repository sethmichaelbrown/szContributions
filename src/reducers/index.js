import {combineReducers} from 'redux'
import eventsReducer from './eventsReducer'
import visibilityFilterReducer from './visibilityFilterReducer'

export default combineReducers({
  eventsReducer,
  visibilityFilterReducer
})