import React, { useCallback, useEffect, useState } from 'react';

import { Box, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { IStore } from '../../../store';
import { FetchNews, FetchSources } from '../../../store/actions/news.actions';
import SearchField from '../../atoms/SearchField';
import NewsList from '../../organisms/NewsList/NewsList';
import SourceList from '../../organisms/SourceList';

export const MainPage = () => {
  const dispatch = useDispatch();

  const { sourcesLoading, newsLoading } = useSelector(
    (state: IStore) => state.news
  );

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
    <Box>
      <Typography>Main Page</Typography>
      {sourcesLoading ? <CircularProgress /> : <SourceList />}
      <SearchField
        name="search"
        placeHolder="Search"
        value={searchValue}
        onChange={setSearchValue}
        onSearch={handleSearch}
      />
      {newsLoading ? <CircularProgress /> : <NewsList />}
    </Box>
  );
};

export default MainPage;
