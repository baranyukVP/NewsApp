import React from 'react';

import { useSelector } from 'react-redux';

import { IStore } from '../../../store';
import { Source } from '../../molecules/Source';

export const SourceList = () => {
  const { sources } = useSelector((state: IStore) => state.news);

  return (
    <>
      {sources.map((source) => (
        <Source key={source.id} source={source} />
      ))}
    </>
  );
};

export default SourceList;
