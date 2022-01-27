import axios from 'axios-observable';

import { getNewsApiQueryString } from '../../helpers';
import { ISourceResponse } from '../../types';
import { INewsPayload } from '../../types/News';

export const fetchNews = (params: INewsPayload) =>
  axios.get(getNewsApiQueryString(`/v2/everything?q=${params.search}`));

export const fetchSources = () =>
  axios.get<ISourceResponse>(
    getNewsApiQueryString('/v2/top-headlines/sources')
  );
