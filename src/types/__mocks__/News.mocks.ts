import { INewsDto } from '../News';

import { SourceMock } from './Source.mocks';

export const NewsMock: INewsDto = {
  author: 'test',
  content: 'test',
  description: 'test',
  publishedAt: 'test',
  source: SourceMock,
  title: 'test',
  url: 'http://test.test/test',
  urlToImage: 'http://test.test/image',
};
