import React from 'react';

import axios from 'axios';
import ReactDOM from 'react-dom';

import App from './App';

axios.defaults.baseURL = 'https://newsapi.org';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
