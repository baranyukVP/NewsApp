import React, { Dispatch, FC, SetStateAction } from 'react';

import { MoreHoriz, Search } from '@mui/icons-material';
import { IconButton, Stack, styled } from '@mui/material';

interface IHeaderActions {
  setActiveAction: Dispatch<SetStateAction<string | undefined>>;
}

const Wrapper = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const HeaderActions: FC<IHeaderActions> = ({ setActiveAction }) => {
  return (
    <Wrapper flexDirection="row">
      <IconButton color="inherit" onClick={() => setActiveAction('search')}>
        <Search />
      </IconButton>
      <IconButton color="inherit" onClick={() => setActiveAction('categories')}>
        <MoreHoriz />
      </IconButton>
    </Wrapper>
  );
};

export default HeaderActions;
