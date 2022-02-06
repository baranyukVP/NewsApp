import { fireEvent, render, screen } from '@testing-library/react';

import SearchField from '../SearchField';

test('should render search field', () => {
  render(<SearchField />);
  const searchField = screen.getByTestId('search-field');
  const searchButton = screen.getByTestId('search-button');

  expect(searchField).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});

test('should render with value', () => {
  render(<SearchField value={'test'} />);
  const searchField = screen.getByTestId('search-field');

  expect(searchField).toHaveValue('test');
});

test('should search value', () => {
  const searchHandler = jest.fn();
  const changeHandler = jest.fn();

  render(<SearchField onChange={changeHandler} onSearch={searchHandler} />);
  const searchField = screen.getByTestId('search-field');
  const searchButton = screen.getByTestId('search-button');

  fireEvent.change(searchField, {
    target: {
      value: 'test',
    },
  });
  expect(changeHandler).toBeCalledWith('test');
  fireEvent.keyDown(searchField, { key: 'Enter' });
  fireEvent.click(searchButton);
  expect(searchHandler).toBeCalledTimes(2);
});
