import React, { FC } from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

interface ILoaderComponent {
  loading: boolean;
}

export const Loader: FC<ILoaderComponent> = ({ loading = false }) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.appBar - 1,
      }}
      open={loading}
      data-testid="loader"
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
