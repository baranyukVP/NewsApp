import { render, screen } from '@testing-library/react';

import Loader from '../Loader';

test('should render loader', () => {
  render(<Loader loading={true} />);
  const loader = screen.getByTestId('loader');

  expect(loader).toBeInTheDocument();
});

test('should render visible loader', () => {
  render(<Loader loading={true} />);
  const loader = screen.getByTestId('loader');

  expect(loader).toHaveStyle('visibility: visible');
});

test('should render hidden loader', () => {
  render(<Loader loading={false} />);
  const loader = screen.getByTestId('loader');

  expect(loader).toHaveStyle('visibility: hidden');
});
