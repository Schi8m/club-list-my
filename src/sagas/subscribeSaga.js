import { put, takeLeading } from 'redux-saga/effects'
import { SET_BOOKED_CLASSES, SUBSCRIBE } from '../actions/classActions'
import { loadBookedClasses, subscribeClass } from '../Api'

export function * watchSubscribe () {
  yield takeLeading(SUBSCRIBE, function * (action) {
    try {
      yield subscribeClass(action.payload.id)
      const data = yield loadBookedClasses()
      yield put({ type: SET_BOOKED_CLASSES, payload: data })
    } catch (e) {
      alert(e.message)
    }
  })
}
