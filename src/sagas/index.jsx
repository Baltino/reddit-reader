import { all } from 'redux-saga/effects';

// sagas
import postsSaga from './posts';

export default function* rootSaga() {
  yield all([
    postsSaga(),
  ]);
}
