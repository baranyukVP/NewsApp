import { render, screen } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

import App from '../App';
import configureStore from '../store';

test('renders learn react link', () => {
  const store = configureStore();

  render(
    <SnackbarProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SnackbarProvider>
  );
  const menuTitle = screen.getByText(/news/i);

  expect(menuTitle).toBeInTheDocument();
});
