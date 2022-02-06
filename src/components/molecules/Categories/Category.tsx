import { FC } from 'react';

import { Chip, ChipProps, styled, Zoom } from '@mui/material';

import { TCategory } from '../../../types';

interface ICategoryProps {
  index?: number;
  active: boolean;
  category: TCategory;
  onClick: (value: TCategory) => void;
}

interface IStyledCategoryProps extends ChipProps {
  active: 'true' | 'false';
}

const StyledChip = styled(Chip)<IStyledCategoryProps>(
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

export const Category: FC<ICategoryProps> = ({
  index = 0,
  active,
  category,
  onClick,
}) => {
  const handleClick = () => {
    onClick?.(category);
  };

  return (
    <Zoom
      in={true}
      timeout={200}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <StyledChip
        color="primary"
        data-testid="category"
        variant={active ? 'outlined' : 'filled'}
        label={category}
        onClick={handleClick}
        active={active.toString() as 'true' | 'false'}
        clickable={!active}
      />
    </Zoom>
  );
};

export default Category;
