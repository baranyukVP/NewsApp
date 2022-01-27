import React, { FC } from 'react';

import { Link, Typography } from '@mui/material';

import { ISourceDto } from '../../../types';

interface ISourceComponent {
  source: ISourceDto;
}

export const Source: FC<ISourceComponent> = ({ source }) => {
  const { name, description, url } = source;

  return (
    <>
      <Typography>{name}</Typography>
      <Typography>{description}</Typography>
      <Link href={url} target="_blank">
        {url}
      </Link>
    </>
  );
};

export default Source;
