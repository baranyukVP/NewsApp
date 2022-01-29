import axios from 'axios-observable';

import { getNewsApiQueryString } from '../../helpers';
import { ISourceResponse } from '../../types';
import { INewsPayload, ITopHeadlinesPayload } from '../../types/News';

export const fetchNews = (params: INewsPayload) =>
  axios.get(getNewsApiQueryString('/v2/everything', params));

export const fetchTopHeadlines = (params: ITopHeadlinesPayload = {}) =>
  axios.get(getNewsApiQueryString(`/v2/top-headlines`, params));

export const fetchSources = () =>
  axios.get<ISourceResponse>(
    getNewsApiQueryString('/v2/top-headlines/sources')
  );
