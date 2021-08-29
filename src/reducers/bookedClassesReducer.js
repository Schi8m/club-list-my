import { SET_BOOKED_CLASSES } from '../actions/classActions'

const INITIAL_STATE = {
  bookedClasses: []
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_BOOKED_CLASSES:
      return {
        ...state,
        bookedClasses: action.payload
      }
    default:
      return state
  }
}
