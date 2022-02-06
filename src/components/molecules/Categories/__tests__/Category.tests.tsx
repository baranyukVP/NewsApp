import { fireEvent, render, screen } from '@testing-library/react';

import { categories } from '../Categories';
import Category from '../Category';

test('should render category', () => {
  const handler = jest.fn();

  render(<Category active category={categories[0]} onClick={handler} />);
  const category = screen.getByTestId('category');

  expect(category).toBeInTheDocument();
});

test('should click on category', () => {
  const handler = jest.fn();

  render(<Category active category={categories[0]} onClick={handler} />);
  const category = screen.getByTestId('category');

  fireEvent.click(category);

  expect(handler).toBeCalledWith(categories[0]);
});
