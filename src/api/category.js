import axios from 'axios';

import {
  fetchCategoryRequest,
  fetchCategoryFailure,
  fetchCategorySuccess
} from '../actions/category';


export const fetchCategoryReq = (category) => dispatch => {
  
  dispatch(fetchCategoryRequest());
  return axios
    .get(`random?${category}`)
    .then(response => {      
      dispatch(fetchCategorySuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchCategoryFailure(error));
    });
};
