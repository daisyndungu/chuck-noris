import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  categories: categoriesReducer,
  category: categoryReducer
});
