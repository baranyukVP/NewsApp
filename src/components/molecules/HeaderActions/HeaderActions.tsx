import React, { Dispatch, FC, SetStateAction } from 'react';

import { MoreHoriz, Search } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';

interface IHeaderActions {
  setActiveAction: Dispatch<SetStateAction<string | undefined>>;
}

export const HeaderActions: FC<IHeaderActions> = ({ setActiveAction }) => {
  return (
    <Stack flexDirection="row">
      <IconButton color="inherit" onClick={() => setActiveAction('search')}>
        <Search />
      </IconButton>
      <IconButton color="inherit" onClick={() => setActiveAction('categories')}>
        <MoreHoriz />
      </IconButton>
    </Stack>
  );
};

export default HeaderActions;
