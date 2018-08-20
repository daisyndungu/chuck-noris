import initialState from '../initialState';

import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../constants';

const categoriesReducer = (
  state = initialState.entitities.categories,
  action ) => {
  switch (action.type) {
  case FETCH_CATEGORIES_REQUEST:
    return Object.assign({}, state, {
      request: {
        ...state.request,
        loading: true,
      },
    });
  case FETCH_CATEGORIES_SUCCESS:
    return Object.assign({}, state, {
      data: action.categories,
      request: {
        ...state.request,
        loading: false,
        status: action.status,
        message: action.message,
      },
    });
  case FETCH_CATEGORIES_FAILURE:
    return Object.assign({}, state, {
      data: [],
      request: {
        ...state.request,
        loading: false,
        status: action,
        message: action,
      },
    });
  default:
    return state;
  }
};

export default categoriesReducer;
