import { FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE } from '../constants';

// Fetch categories request

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORY_REQUEST,
});
// succesfully fetch categories
export const  fetchCategorySuccess = (categories) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    categories,
    message: 'Category fetched successfully',
    status: 'success',
  };
};

// failure to fetch categories
export const fetchCategoryFailure = () => {
  return {
    type: FETCH_CATEGORY_FAILURE,
    message: 'Category failed to fetch',
    status: 'fail'
  };
};
