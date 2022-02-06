import { FC } from 'react';

import { Stack, styled } from '@mui/material';

import { ISourceDto } from '../../../types';
import { Source } from '../../molecules/Source';

const Wrapper = styled(Stack)({
  overflowX: 'auto',
});

type TSourceListProps = {
  sources?: ISourceDto[];
};

export const SourceList: FC<TSourceListProps> = ({ sources = [] }) => {
  return (
    <Wrapper direction="row" spacing={1}>
      {sources?.map((source) => (
        <Source key={source.id} source={source} />
      ))}
    </Wrapper>
  );
};

export default SourceList;
