import React, { ChangeEvent, FC, useCallback } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';

interface ISearchField {
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
  placeHolder?: string;
}

export const SearchField: FC<ISearchField> = ({
  name,
  value,
  onChange,
  onSearch,
  placeHolder,
}) => {
  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const value = event.target?.value;

      onChange?.(value);
    },
    [onChange]
  );

  const handleSearch = useCallback(() => {
    onSearch?.();
  }, [onSearch]);

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        name={name}
        value={value}
        onChange={handleOnChange}
        placeholder={placeHolder}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton sx={{ p: '10px' }} onClick={handleSearch} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchField;
