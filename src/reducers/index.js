import { combineReducers } from 'redux'
import clubs from './clubReducer'
import classes from './classReducer'
import bookedClasses from './bookedClassesReducer'

export default combineReducers({
  clubs,
  classes,
  bookedClasses
})
