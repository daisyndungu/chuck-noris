import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BASE_URL} from './config/config';
import Home from './components/Home';

axios.defaults.baseURL = BASE_URL;

ReactDOM.render(<Home />, document.getElementById('root'));
