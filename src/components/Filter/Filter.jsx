// import React from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { changeFilter } from '../../redux/contacts/filterSlice';
// import { Text, FilterWrap } from './Filter.styled';

// export const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(state => state.filter);

//   const changeFilterValue = event => {
//     const inputValue = event.target.value;
//     dispatch(changeFilter(inputValue));
//   };

//   return (
//     <FilterWrap>
//       <Text>Find contacts by name</Text>
//       <input
//         type="text"
//         value={filter}
//         onChange={changeFilterValue}/>
      
//             </FilterWrap>
//   );
// }

import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FilterText} from './Filter.styled';
import { changeFilter } from '../../redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  
  const changeFilterValue = event => {
    const inputValue = event.target.value;
    dispatch(changeFilter(inputValue));
  };

  return (
    <>
      <FilterText>Find contacts by name</FilterText>
      <input
        type="text"
        value={filter}
        onChange={changeFilterValue}
      />
    </>
  );
}