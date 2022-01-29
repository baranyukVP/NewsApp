import React, { FC, useCallback, useEffect, useState } from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { FetchNews } from '../../../store/actions/news.actions';
import { FetchUserIpInfo } from '../../../store/actions/user.actions';
import { SearchField } from '../../atoms/SearchField';
import { Categories } from '../../molecules/Categories';
import HeaderActions from '../../molecules/HeaderActions/HeaderActions';

export const Header: FC = ({ children }) => {
  const dispatch = useDispatch();

  const [activeAction, setActiveAction] = useState<string>();
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = useCallback(() => {
    dispatch({
      type: FetchNews.Pending,
      payload: { q: searchValue },
    });
  }, [dispatch, searchValue]);

  useEffect(() => {
    dispatch({
      type: FetchUserIpInfo.Pending,
    });
  }, [dispatch]);

  return (
    <>
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.appBar }} position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography>News</Typography>

          {activeAction === 'categories' && <Categories />}
          {activeAction === 'search' && (
            <SearchField
              name="search"
              placeHolder="Search"
              value={searchValue}
              onChange={setSearchValue}
              onSearch={handleSearch}
            />
          )}
          <HeaderActions setActiveAction={setActiveAction} />
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default Header;
