import React, { FC } from 'react';

import { Chip, Link } from '@mui/material';

import { ISourceDto } from '../../../types';

interface ISourceComponent {
  source: ISourceDto;
}

export const Source: FC<ISourceComponent> = ({ source }) => {
  const { name, url } = source;

  return (
    <Link href={url} target="_blank">
      <Chip sx={{ cursor: 'pointer' }} label={name} color="primary" />
    </Link>
  );
};

export default Source;
