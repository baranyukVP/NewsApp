import React, { FC, useCallback, useState } from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { FetchNews } from '../../../store/actions/news.actions';
import { SearchField } from '../../atoms/SearchField';
import { Categories } from '../../molecules/Categories';

export const Header: FC = ({ children }) => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = useCallback(() => {
    dispatch({
      type: FetchNews.Pending,
      payload: { q: searchValue },
    });
  }, [dispatch, searchValue]);

  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography>News</Typography>
          <Categories />
          <SearchField
            name="search"
            placeHolder="Search"
            value={searchValue}
            onChange={setSearchValue}
            onSearch={handleSearch}
          />
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default Header;
