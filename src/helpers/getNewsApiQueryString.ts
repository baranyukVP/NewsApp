import querystring from 'query-string';

import { INewsPayload, ITopHeadlinesPayload } from '../types/News';

const NEWS_API_KEY = 'eaa59c25d4684e879582be4c538adfc7';

type TQueryStringParams = INewsPayload | ITopHeadlinesPayload;

export const getNewsApiQueryString = (
  url: string,
  params?: TQueryStringParams
) => `${url}?${querystring.stringify({ ...params, apiKey: NEWS_API_KEY })}`;
