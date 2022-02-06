import { render, screen } from '@testing-library/react';

import { newsMock } from '../../../../types/__mocks__/News.mocks';
import { sourceMock } from '../../../../types/__mocks__/Source.mocks';
import NewsList from '../NewsList';

test('should render news list with just one element', () => {
  render(<NewsList news={[newsMock]} />);
  const newsList = screen.getAllByTestId('card');

  expect(newsList[1]).toBeUndefined();
  expect(newsList[0]).toBeInTheDocument();
  expect(newsList[0]).toHaveTextContent(sourceMock.name);
});
