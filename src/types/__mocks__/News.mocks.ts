import { INewsDto } from '../News';

import { sourceMock } from './Source.mocks';

export const newsMock: INewsDto = {
  author: 'test',
  content: 'test',
  description: 'test',
  publishedAt: 'test',
  source: sourceMock,
  title: 'test',
  url: 'http://test.test/test',
  urlToImage: 'http://test.test/image',
};
