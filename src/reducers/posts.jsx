import { actionTypes } from '../actions/posts';
import { AJAX_STATUS } from '../actions/constants';

const initialState = {
  currentPost: undefined,
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
        posts: action.payload.userCities || [],
      };
    case actionTypes.GET_POSTS_FAILED:
      return {
        ...state,
        getStatus: AJAX_STATUS.error,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
