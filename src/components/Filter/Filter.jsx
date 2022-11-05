import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';

import { Label, Input } from './Filter.styled';

export default function Filter() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e =>
    dispatch(contactsActions(e.currentTarget.value)); 

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





