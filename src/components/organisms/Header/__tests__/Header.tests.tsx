import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import configureStore from '../../../../store';
import Header from '../Header';

test('should render header', () => {
  const store = configureStore();

  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  const search = screen.getByTestId('search-icon');
  const categories = screen.getByTestId('more-icon');
  const menuTitle = screen.getByText(/news/i);

  expect(menuTitle).toBeInTheDocument();
  expect(search).toBeInTheDocument();
  expect(categories).toBeInTheDocument();
});

test('should click on search actions', () => {
  const store = configureStore();

  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  const search = screen.getByTestId('search-icon');

  fireEvent.click(search);

  const searchField = screen.getByTestId('search-field');
  const searchButton = screen.getByTestId('search-button');

  expect(searchField).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});

test('should click on categories actions', () => {
  const store = configureStore();

  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  const categoriesButton = screen.getByTestId('more-icon');

  fireEvent.click(categoriesButton);

  const categories = screen.getByTestId('categories-wrapper');

  expect(categories).toBeInTheDocument();
});
