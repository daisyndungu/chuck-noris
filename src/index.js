import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'antd/dist/antd.css';
import { BASE_URL } from './config/config';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store/store';

axios.defaults.baseURL = BASE_URL;

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'),
);
