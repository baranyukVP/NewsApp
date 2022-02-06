import { render, screen } from '@testing-library/react';

import { sourceMock } from '../../../../types/__mocks__/Source.mocks';
import SourceList from '../SourceList';

test('should render source list with just one element', () => {
  render(<SourceList sources={[sourceMock]} />);
  const sources = screen.getAllByTestId('source');

  expect(sources[1]).toBeUndefined();
  expect(sources[0]).toBeInTheDocument();
  expect(sources[0]).toHaveTextContent(sourceMock.name);
});
