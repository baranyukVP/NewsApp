import { render, screen } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

import configureStore from '../../../../store';
import MainPage from '../MainPage';

test('should render main page', () => {
  const store = configureStore();

  render(
    <SnackbarProvider>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </SnackbarProvider>
  );
  const mainPage = screen.getByTestId('main-page');

  expect(mainPage).toBeInTheDocument();
});
