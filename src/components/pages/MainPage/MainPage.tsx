import React, { useEffect } from 'react';

import { Container } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';

import { IStore } from '../../../store';
import { FetchTopHeadlines } from '../../../store/actions/news.actions';
import { Loader } from '../../atoms/Loader';
import NewsList from '../../organisms/NewsList/NewsList';

export const MainPage = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    news: { newsLoading, newsError, category },
    user: { ipInfo, ipInfoError },
  } = useSelector((state: IStore) => state);

  useEffect(() => {
    if (ipInfo) {
      dispatch({
        type: FetchTopHeadlines.Pending,
        payload: { category, country: ipInfo?.country?.toLowerCase() },
      });
    }
  }, [category, dispatch, ipInfo]);

  useEffect(() => {
    if (newsError) {
      enqueueSnackbar(newsError, { variant: 'error' });
    }

    if (ipInfoError) {
      enqueueSnackbar(ipInfoError, { variant: 'error' });
    }
  }, [enqueueSnackbar, newsError, ipInfoError]);

  return (
    <Container>
      <Loader loading={newsLoading} />
      <NewsList />
    </Container>
  );
};

export default MainPage;
