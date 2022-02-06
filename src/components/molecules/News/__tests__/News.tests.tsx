import { render, screen } from '@testing-library/react';

import { newsMock } from '../../../../__mocks__/News.mocks';
import News from '../News';

test('should render article', () => {
  render(<News news={newsMock} />);
  const card = screen.getByTestId('card');

  expect(card).toBeInTheDocument();
  expect(card).toHaveTextContent(newsMock.title);
  expect(card).toHaveTextContent(newsMock.description);
});
