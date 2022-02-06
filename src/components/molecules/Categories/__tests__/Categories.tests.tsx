import React from 'react';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import configureStore from '../../../../store';
import Categories from '../Categories';

test('should render categories', () => {
  const store = configureStore();

  render(
    <Provider store={store}>
      <Categories />
    </Provider>
  );
  const categories = screen.getByTestId('categories-wrapper');

  expect(categories).toBeInTheDocument();
});

test('should render all categories', () => {
  const store = configureStore();

  render(
    <Provider store={store}>
      <Categories />
    </Provider>
  );
  const categories = screen.getAllByTestId('category');

  expect(categories.length).toEqual(categories.length);
});
