import React, { FC, useCallback } from 'react';

import { OpenInNew } from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';

import { INewsDto } from '../../../types/News';

interface INewsComponent {
  news: INewsDto;
}

export const News: FC<INewsComponent> = ({ news }) => {
  const handleOpenNews = useCallback(() => {
    if (news.url) {
      window.open(news.url, '_blank');
    }
  }, [news.url]);

  return (
    <Card variant="outlined">
      <CardHeader title={news.title} />
      <CardMedia component="img" image={news.urlToImage} alt="news-image" />
      <CardContent>
        <Typography gutterBottom>{news.author}</Typography>
        <Typography>{news.description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleOpenNews} aria-label="open">
          <OpenInNew />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default News;
