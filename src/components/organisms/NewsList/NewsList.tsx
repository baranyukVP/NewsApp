import React from 'react';

import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

import { IStore } from '../../../store';
import { News } from '../../molecules/News';

export const NewsList = () => {
  const { news = [] } = useSelector((store: IStore) => store.news);

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
