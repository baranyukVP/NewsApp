import React, { useEffect } from 'react';

import { Box, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { IStore } from '../../../store';
import { FetchTopHeadlines } from '../../../store/actions/news.actions';
import { SourceList } from '../../organisms/SourceList';

export const MainPage = () => {
  const dispatch = useDispatch();

  const { sourcesLoading } = useSelector((state: IStore) => state.news);

  useEffect(() => {
    dispatch({
      type: FetchTopHeadlines.Pending,
    });
  }, [dispatch]);

  return (
    <Box>
      <Typography>Main Page</Typography>
      {sourcesLoading ? <CircularProgress /> : <SourceList />}
    </Box>
  );
};

export default MainPage;
