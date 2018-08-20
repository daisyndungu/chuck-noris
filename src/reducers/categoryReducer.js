import initialState from '../initialState';

import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
} from '../constants';

const categoryReducer = (
  state = initialState.entitities.category,
  action ) => {
  switch (action.type) {
  case FETCH_CATEGORY_REQUEST:
    return Object.assign({}, state, {
      request: {
        ...state.request,
        loading: true,
      },
    });
  case FETCH_CATEGORY_SUCCESS:
    return Object.assign({}, state, {
      data: action.categories,
      request: {
        ...state.request,
        loading: false,
        status: action.status,
        message: action.message,
      },
    });
  case FETCH_CATEGORY_FAILURE:
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

export default categoryReducer;
