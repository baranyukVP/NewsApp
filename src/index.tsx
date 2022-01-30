import React from 'react';

import axios from 'axios-observable';
import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store';

import './index.css';

axios.defaults.baseURL = 'https://newsapi.org';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
