import { SET_CLASSES } from '../actions/classActions'

const INITIAL_STATE = {
  classes: []
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CLASSES:
      return {
        ...state,
        classes: action.payload
      }
    default:
      return state
  }
}
