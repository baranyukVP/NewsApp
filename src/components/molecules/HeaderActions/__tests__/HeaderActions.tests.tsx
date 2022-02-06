import { fireEvent, render, screen } from '@testing-library/react';

import HeaderActions from '../HeaderActions';

test('should render header actions', () => {
  const handler = jest.fn();

  render(<HeaderActions setActiveAction={handler} />);
  const search = screen.getByTestId('search-icon');
  const categories = screen.getByTestId('more-icon');

  expect(search).toBeInTheDocument();
  expect(categories).toBeInTheDocument();
});

test('should click on header actions', () => {
  const handler = jest.fn();

  render(<HeaderActions setActiveAction={handler} />);
  const search = screen.getByTestId('search-icon');
  const categories = screen.getByTestId('more-icon');

  fireEvent.click(search);
  expect(handler).toBeCalledWith('search');

  fireEvent.click(categories);
  expect(handler).toBeCalledWith('categories');
});
