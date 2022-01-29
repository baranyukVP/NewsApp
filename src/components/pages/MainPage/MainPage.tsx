import React, { useCallback, useEffect, useState } from 'react';

import { CircularProgress, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { IStore } from '../../../store';
import { FetchNews, FetchSources } from '../../../store/actions/news.actions';
import SearchField from '../../atoms/SearchField';
import NewsList from '../../organisms/NewsList/NewsList';

export const MainPage = () => {
  const dispatch = useDispatch();

  const { newsLoading } = useSelector((state: IStore) => state.news);

  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    dispatch({
      type: FetchSources.Pending,
    });
  }, [dispatch]);

  const handleSearch = useCallback(() => {
    dispatch({
      type: FetchNews.Pending,
      payload: { search: searchValue },
    });
  }, [dispatch, searchValue]);

  return (
    <Container>
      <SearchField
        name="search"
        placeHolder="Search"
        value={searchValue}
        onChange={setSearchValue}
        onSearch={handleSearch}
      />
      {newsLoading ? <CircularProgress /> : <NewsList />}
    </Container>
  );
};

export default MainPage;
