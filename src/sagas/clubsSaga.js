import { put, takeLeading } from 'redux-saga/effects'
import { LOAD_CLUBS, SET_CLUBS } from '../actions/clubActions'
import { loadClubList } from '../Api'

export function * watchLoadClubs () {
  yield takeLeading(LOAD_CLUBS, function * (action) {
    try {
      const data = yield loadClubList()
      yield put({ type: SET_CLUBS, payload: data })
    } catch (e) {
      alert(e.message)
    }
  })
}
