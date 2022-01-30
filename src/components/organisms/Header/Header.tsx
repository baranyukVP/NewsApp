import React, { FC, useCallback, useEffect, useState } from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { IStore } from '../../../store';
import { FetchNews } from '../../../store/actions/news.actions';
import { FetchUserIpInfo } from '../../../store/actions/user.actions';
import SearchField from '../../atoms/SearchField';
import Categories from '../../molecules/Categories';
import HeaderActions from '../../molecules/HeaderActions';

export const Header: FC = () => {
  const dispatch = useDispatch();

  const { language } = useSelector((store: IStore) => store.user);

  const [activeAction, setActiveAction] = useState<string>();
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = useCallback(() => {
    dispatch({
      type: FetchNews.Pending,
      payload: { q: searchValue, language },
    });
  }, [dispatch, language, searchValue]);

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
    </>
  );
};

export default Header;
