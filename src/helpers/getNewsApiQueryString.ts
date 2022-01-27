const NEWS_API_KEY = 'eaa59c25d4684e879582be4c538adfc7';

export const getNewsApiQueryString = (params: string = '') =>
  params.includes('?')
    ? `${params}&apiKey=${NEWS_API_KEY}`
    : `${params}?apiKey=${NEWS_API_KEY}`;
