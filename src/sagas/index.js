import { all } from 'redux-saga/effects'
import { watchLoadClasses } from './classesSaga'
import { watchLoadClubs } from './clubsSaga'
import { watchBookedClasses } from './bookedClassesSaga'
import { watchSubscribe } from './subscribeSaga'
import { watchUnSubscribe } from './unSubscribeSaga'

export default function * rootSaga () {
  yield all([
    watchLoadClubs(),
    watchLoadClasses(),
    watchBookedClasses(),
    watchSubscribe(),
    watchUnSubscribe()
  ])
}
