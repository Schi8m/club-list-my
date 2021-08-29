import { put, takeLeading } from 'redux-saga/effects'
import { SET_BOOKED_CLASSES, UNSUBSCRIBE } from '../actions/classActions'
import { loadBookedClasses, unSubscribeClass } from '../Api'

export function * watchUnSubscribe () {
  yield takeLeading(UNSUBSCRIBE, function * (action) {
    try {
      yield unSubscribeClass(action.payload.id)
      const data = yield loadBookedClasses()
      yield put({ type: SET_BOOKED_CLASSES, payload: data })
    } catch (e) {
      alert(e.message)
    }
  })
}
