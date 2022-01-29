import React, { useState } from 'react';

import { Chip, ChipProps, Stack, styled } from '@mui/material';

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
  active: boolean;
}

const Category = styled(Chip)<ICategoryStyledProps>(({ theme, active }) => ({
  borderColor: theme.palette.primary.contrastText,
  borderStyle: 'solid',
  borderWidth: '1px',
  margin: theme.spacing(1),
  backgroundColor: active
    ? theme.palette.primary.contrastText
    : theme.palette.primary.main,

  ['&:hover']: {
    backgroundColor: active
      ? theme.palette.primary.light
      : theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
}));

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<string>();

  const handleClick = (category: TCategory) => {
    setActiveCategory((activeCategory) =>
      category === activeCategory ? undefined : category
    );
  };

  return (
    <Stack flexDirection="row">
      {categories.map((category) => (
        <Category
          active={activeCategory === category}
          key={category}
          label={category}
          color="primary"
          onClick={() => handleClick(category)}
          variant={activeCategory === category ? 'outlined' : 'filled'}
          clickable
        />
      ))}
    </Stack>
  );
};

export default Categories;
