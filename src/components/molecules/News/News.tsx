import { FC, useCallback } from 'react';

import { OpenInNew } from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  styled,
  Typography,
  Zoom,
} from '@mui/material';

import { INewsDto } from '../../../types/News';

type TNewsProps = {
  news: INewsDto;
  // animation delay on appearance in ms
  transitionDelay?: number;
};

const StyledNewsComponent = styled(Card)(({ theme }) => ({
  margin: `${theme.spacing(2)} 0`,
}));

export const News: FC<TNewsProps> = ({ news, transitionDelay = 0 }) => {
  const handleOpenNews = useCallback(() => {
    if (news.url) {
      window.open(news.url, '_blank');
    }
  }, [news.url]);

  return (
    <Zoom
      in={!!news}
      timeout={200}
      style={{ transitionDelay: `${transitionDelay}ms` }}
    >
      <StyledNewsComponent variant="outlined" data-testid="card">
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
      </StyledNewsComponent>
    </Zoom>
  );
};

export default News;
