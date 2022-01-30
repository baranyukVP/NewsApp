import React from 'react';

import { Stack, styled } from '@mui/material';
import { useSelector } from 'react-redux';

import { IStore } from '../../../store';
import { Source } from '../../molecules/Source';

const Wrapper = styled(Stack)({
  overflowX: 'auto',
});

export const SourceList = () => {
  const { sources = [] } = useSelector((state: IStore) => state.news);

  return (
    <Wrapper direction="row" spacing={1}>
      {sources?.map((source) => (
        <Source key={source.id} source={source} />
      ))}
    </Wrapper>
  );
};

export default SourceList;
