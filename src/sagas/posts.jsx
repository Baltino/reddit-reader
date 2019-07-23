// npm packages
import {
  takeLatest, call, put,
} from 'redux-saga/effects';

import {
  actionTypes,
  getPostsSuccess,
  getPostsFailed,
} from '../actions/posts';

// actions
import { getPosts } from '../api/posts';

// utils
// worker sagas
function* getPostsSaga() {
  try {
    const response = yield call(getPosts);
    if (response && response.data) {
      const posts = response.data.data.children.map(c => ({ ...c.data }));
      yield put(getPostsSuccess('successPosts', posts));
    } else {
      yield put(getPostsFailed('someError', response.data));
    }
  } catch (e) {
    yield put(getPostsFailed('serverError', e));
  }
}


export default function* postsSaga() {
  yield takeLatest(actionTypes.GET_POSTS, getPostsSaga);
}
