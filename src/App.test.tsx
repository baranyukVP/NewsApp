import React from 'react';

import { render, screen } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store';

test('renders learn react link', () => {
  const store = configureStore();

  render(
    <SnackbarProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SnackbarProvider>
  );
  const linkElement = screen.getByText(/news/i);

  expect(linkElement).toBeInTheDocument();
});
