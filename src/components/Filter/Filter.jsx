import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from 'redux/filter/filterSlice';
import { selectFilters } from 'redux/selectors';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const filterContact = e => {
    dispatch(contactsFilter(e.target.value));
  };

  return (
    <TextField
      sx={{ marginTop: 4, marginBottom: 1 }}
      label="Filter"
      name="filter"
      type="text"
      autoComplete="current-password"
      onChange={filterContact}
      value={filter}
    />
  );
};
