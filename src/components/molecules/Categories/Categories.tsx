import React from 'react';

import { Chip, ChipProps, Stack, styled, Zoom } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { IStore } from '../../../store';
import { FetchTopHeadlines } from '../../../store/actions/news.actions';
import { TCategory } from '../../../types';

export const categories: TCategory[] = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

interface ICategoryStyledProps extends ChipProps {
  active: 'true' | 'false';
}

const Category = styled(Chip)<ICategoryStyledProps>(
  ({ theme, active, clickable }) => ({
    borderColor: theme.palette.primary.contrastText,
    borderStyle: 'solid',
    borderWidth: '1px',
    margin: theme.spacing(1),
    backgroundColor:
      active === 'true'
        ? theme.palette.primary.contrastText
        : theme.palette.primary.main,

    ['&:hover']: {
      color: clickable && theme.palette.primary.contrastText,
    },
  })
);

export const Categories = () => {
  const dispatch = useDispatch();

  const { category: activeCategory } = useSelector(
    (store: IStore) => store.news
  );

  const handleClick = (category: TCategory) => {
    if (activeCategory !== category) {
      dispatch({
        type: FetchTopHeadlines.SetCategory,
        payload: category,
      });
    }
  };

  return (
    <Stack flexDirection="row" data-testid="categories-wrapper">
      {categories.map((category, index) => (
        <Zoom
          key={category}
          in={true}
          timeout={200}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          <Category
            active={
              (activeCategory === category).toString() as 'true' | 'false'
            }
            label={category}
            color="primary"
            onClick={() => handleClick(category)}
            variant={activeCategory === category ? 'outlined' : 'filled'}
            clickable={activeCategory !== category}
            data-testid="category"
          />
        </Zoom>
      ))}
    </Stack>
  );
};

export default Categories;
