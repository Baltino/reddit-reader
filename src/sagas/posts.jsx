// npm packages
import {
  takeLatest, call, put,
} from 'redux-saga/effects';

import {
  actionTypes,
  getPostsSuccess,
  getPostsFailed,
  dismissAllPostsSuccess,
} from '../actions/posts';

// actions
import { getPosts } from '../api/posts';

// utils
// worker sagas
function* getPostsSaga(action) {
  try {
    const { after } = action.payload;
    const response = yield call(getPosts, after);
    if (response && response.data) {
      const posts = response.data.data.children.map(c => ({ ...c.data }));
      yield put(getPostsSuccess('successPosts', posts, response.data.data.after));
    } else {
      yield put(getPostsFailed('someError', response.data));
    }
  } catch (e) {
    yield put(getPostsFailed('serverError', e));
  }
}

function sleep(t) {
  return new Promise(res => setTimeout(() => res(), t));
}

function* dismissAllPostsSaga() {
  yield call(sleep, 1000);
  yield put(dismissAllPostsSuccess('success'));
}


export default function* postsSaga() {
  yield takeLatest(actionTypes.GET_POSTS, getPostsSaga);
  yield takeLatest(actionTypes.DISMISS_ALL_POSTS, dismissAllPostsSaga);
}
