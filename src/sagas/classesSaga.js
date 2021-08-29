import { put, takeLeading } from 'redux-saga/effects'
import { LOAD_CLASSES, SET_CLASSES } from '../actions/classActions'
import { loadClassesList } from '../Api'

export function * watchLoadClasses () {
  yield takeLeading(LOAD_CLASSES, function * (action) {
    try {
      const data = yield loadClassesList(action.payload.startDate, action.payload.endDate, action.payload.clubId)
      yield put({ type: SET_CLASSES, payload: data })
    } catch (e) {
      alert(e.message)
    }
  })
}
