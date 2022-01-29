import React, { useEffect } from 'react';

import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { IStore } from '../../../store';
import { FetchTopHeadlines } from '../../../store/actions/news.actions';
import { Loader } from '../../atoms/Loader';
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
    <Container>
      <Loader loading={newsLoading} />
      <NewsList />
    </Container>
  );
};

export default MainPage;
