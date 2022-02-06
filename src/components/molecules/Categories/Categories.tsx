import { useCallback } from 'react';

import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { IStore } from '../../../store';
import { FetchTopHeadlines } from '../../../store/actions/news.actions';
import { TCategory } from '../../../types';

import { Category } from './Category';

export const categories: TCategory[] = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

export const Categories = () => {
  const dispatch = useDispatch();

  const { category: activeCategory } = useSelector(
    (store: IStore) => store.news
  );

  const handleClick = useCallback(
    (category: TCategory) => {
      if (activeCategory !== category) {
        dispatch({
          type: FetchTopHeadlines.SetCategory,
          payload: category,
        });
      }
    },
    [activeCategory, dispatch]
  );

  return (
    <Stack flexDirection="row" data-testid="categories-wrapper">
      {categories.map((category, index) => (
        <Category
          key={category}
          index={index}
          active={activeCategory === category}
          category={category}
          onClick={handleClick}
        />
      ))}
    </Stack>
  );
};

export default Categories;
