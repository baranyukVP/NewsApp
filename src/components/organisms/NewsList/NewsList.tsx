import { FC } from 'react';

import { Box } from '@mui/material';

import { INewsDto } from '../../../types/News';
import { News } from '../../molecules/News';

type TNewsListProps = {
  news?: INewsDto[];
};

export const NewsList: FC<TNewsListProps> = ({ news = [] }) => {
  return (
    <Box>
      {news?.map((item, index) => (
        <News
          key={`${index}-${item.source}`}
          news={item}
          transitionDelay={index * 100}
        />
      ))}
    </Box>
  );
};

export default NewsList;
