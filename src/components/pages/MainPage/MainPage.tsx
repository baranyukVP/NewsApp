import React, { useEffect } from 'react';

import { CircularProgress, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { IStore } from '../../../store';
import { FetchTopHeadlines } from '../../../store/actions/news.actions';
import NewsList from '../../organisms/NewsList/NewsList';

export const MainPage = () => {
  const dispatch = useDispatch();

  const { newsLoading } = useSelector((state: IStore) => state.news);

  useEffect(() => {
    dispatch({
      type: FetchTopHeadlines.Pending,
      payload: { category: 'general' },
    });
  }, [dispatch]);

  return (
    <Container>{newsLoading ? <CircularProgress /> : <NewsList />}</Container>
  );
};

export default MainPage;
