import axios from 'axios';

import {
  fetchCategoriesRequest,
  fetchCategoriesFailure,
  fetchCategoriesSuccess
} from '../actions/categories';

const categories = 'categories';

export const fetchCategoriesReq = () => dispatch => {
  dispatch(fetchCategoriesRequest());
  return axios
    .get(categories)
    .then(response => {
      dispatch(fetchCategoriesSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchCategoriesFailure(error));
    });
};
