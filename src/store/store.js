import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import initialState from './initialSate;'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);