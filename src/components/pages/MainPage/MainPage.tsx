import React, { useEffect } from 'react';

import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { IStore } from '../../../store';
import { FetchTopHeadlines } from '../../../store/actions/news.actions';
import { Loader } from '../../atoms/Loader';
import NewsList from '../../organisms/NewsList/NewsList';

export const MainPage = () => {
  const dispatch = useDispatch();

  const {
    news: { newsLoading, category },
    user: { ipInfo },
  } = useSelector((state: IStore) => state);

  useEffect(() => {
    if (ipInfo) {
      dispatch({
        type: FetchTopHeadlines.Pending,
        payload: { category, country: ipInfo?.country?.toLowerCase() },
      });
    }
  }, [category, dispatch, ipInfo]);

  return (
    <Container>
      <Loader loading={newsLoading} />
      <NewsList />
    </Container>
  );
};

export default MainPage;
