import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { Label, Input } from './Filter.styled';

export function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChangeFilter = e =>
    dispatch(changeFilter(e.currentTarget.value)); 

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        required
      />
    </Label>
  );
}





