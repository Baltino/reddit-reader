export const actionTypes = {
  GET_POSTS: 'GET_POSTS',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_FAILED: 'GET_POSTS_FAILED',
};

export function getPosts() {
  return {
    type: actionTypes.GET_POSTS,
  };
}

export function getPostsSuccess(sucessMessage, posts) {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    payload: {
      sucessMessage,
      posts,
    },
  };
}

export function getPostsFailed(errorMessage, error) {
  return {
    type: actionTypes.GET_POSTS_FAILED,
    payload: {
      errorMessage,
      error,
    },
  };
}
