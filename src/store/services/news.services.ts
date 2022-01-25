import axios from 'axios-observable';

import { getNewsApiQueryString } from '../../helpers';

export const fetchTopHeadlines = () => {
  return axios.get<string>(getNewsApiQueryString('/v2/top-headlines/sources'));
};
