import { render, screen } from '@testing-library/react';

import { NewsMock } from '../../../../types/__mocks__/News.mocks';
import News from '../News';

test('should render article', () => {
  render(<News news={NewsMock} />);
  const card = screen.getByTestId('card');

  expect(card).toBeInTheDocument();
  expect(card).toHaveTextContent(NewsMock.title);
  expect(card).toHaveTextContent(NewsMock.description);
});
