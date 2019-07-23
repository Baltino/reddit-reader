import { actionTypes } from '../actions/posts';
import { AJAX_STATUS } from '../actions/constants';

const initialState = {
  currentPost: {},
  user: { visited: {} },
  getStatus: AJAX_STATUS.firstCheck,
  posts: [],
  successMessage: '',
  errorMessage: '',
};

export default function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        getStatus: AJAX_STATUS.loading,
      };
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        successMessage: action.payload.successMessage,
        getStatus: AJAX_STATUS.success,
        posts: action.payload.posts || [],
      };
    case actionTypes.GET_POSTS_FAILED:
      return {
        ...state,
        getStatus: AJAX_STATUS.error,
        errorMessage: action.payload.errorMessage,
      };
    case actionTypes.SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload.post,
      };
    default:
      return state;
  }
}
