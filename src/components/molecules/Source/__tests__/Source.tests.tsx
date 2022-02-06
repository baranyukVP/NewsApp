import { render, screen } from '@testing-library/react';

import { SourceMock } from '../../../../types/__mocks__/Source.mocks';
import Source from '../Source';

test('should render source', () => {
  render(<Source source={SourceMock} />);
  const source = screen.getByTestId('source');

  expect(source).toBeInTheDocument();
  expect(source).toHaveTextContent(SourceMock.name);
});
