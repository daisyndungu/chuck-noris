import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from '../initialState';
import rootReducer from '../reducers';
import logger from 'redux-logger';


const storeConfig = () => {
  const initStore = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger, thunk),
  );
  return initStore;
};
const store = storeConfig(initialState);

export default store;
