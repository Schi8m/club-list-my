import { put, takeLeading } from 'redux-saga/effects'
import { GET_BOOKED_CLASSES, SET_BOOKED_CLASSES } from '../actions/classActions'
import { loadBookedClasses } from '../Api'

export function * watchBookedClasses () {
  yield takeLeading(GET_BOOKED_CLASSES, function * (action) {
    try {
      const data = yield loadBookedClasses()
      yield put({ type: SET_BOOKED_CLASSES, payload: data })
    } catch (e) {
      alert(e.message)
    }
  })
}
