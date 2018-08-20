import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../constants';

// Fetch categories request

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});
// succesfully fetch categories
export function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories,
    message: 'Categories fetched successfully',
    status: 'success',
  };
}

// failure to fetch categories
export function fetchCategoriesFailure() {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    message: 'Categories failed to fetch',
    status: 'fail'
  };
}
