import { TCategory, TCountry, TLanguage, TSortBy } from './common';
import { ISourceDto } from './Source';

export interface INewsDto {
  // The identifier id and a name for the source this article came from.
  source: ISourceDto;
  // The author of the article
  author: string;
  // The headline or title of the article.
  title: string;
  // A description or snippet from the article.
  description: string;
  // The direct URL to the article.
  url: string;
  // The URL to a relevant image for the article.
  urlToImage: string;
  // The date and time that the article was published, in UTC (+000)
  publishedAt: string;
  // The unformatted content of the article, where available.
  // This is truncated to 200 chars.
  content: string;
}

export interface INewsPayload {
  // search string
  q: string;
  qlnTitle?: string;
  sources?: ISourceDto[];
  domains?: string[];
  excludeDomains?: string[];
  from?: Date;
  to?: Date;
  language?: TLanguage;
  sortBy?: TSortBy;
  pageSize?: number;
  page?: number;
}

export interface ITopHeadlinesPayload {
  // search string
  q?: string;
  sources?: ISourceDto[];
  category?: TCategory;
  country?: TCountry;
  pageSize?: number;
  page?: number;
}
