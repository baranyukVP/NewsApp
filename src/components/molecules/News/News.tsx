import React, { FC } from 'react';

import { Box, Link, Typography } from '@mui/material';

import { INewsDto } from '../../../types/News';

interface INewsComponent {
  news: INewsDto;
}

export const News: FC<INewsComponent> = ({ news }) => {
  return (
    <Box>
      <Typography>{news.title}</Typography>
      <Typography>{news.description}</Typography>
      <Typography>{news.author}</Typography>
      <Link href={news?.url} target="_blank">
        {news?.url}
      </Link>
    </Box>
  );
};

export default News;
