import { render, screen } from '@testing-library/react';

import { sourceMock } from '../../../../__mocks__/Source.mocks';
import Source from '../Source';

test('should render source', () => {
  render(<Source source={sourceMock} />);
  const source = screen.getByTestId('source');

  expect(source).toBeInTheDocument();
  expect(source).toHaveTextContent(sourceMock.name);
});
