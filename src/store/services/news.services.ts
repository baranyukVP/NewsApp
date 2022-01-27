import axios from 'axios-observable';

import { getNewsApiQueryString } from '../../helpers';
import { ISourceResponse } from '../../types';

export const fetchTopHeadlines = () => {
  return axios.get<ISourceResponse>(
    getNewsApiQueryString('/v2/top-headlines/sources')
  );
};
