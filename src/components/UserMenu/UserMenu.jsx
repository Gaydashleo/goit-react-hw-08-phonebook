import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import { getName } from '../../redux/auth/authSelectors';
import authOperetions from 'redux/auth/authOperations';
import { UserMenuWrap, UserMenuText, UserMenuName } from './UserMenu.styled';

export const UserMenu = () => {

  const dispatch = useDispatch();
  const user = useSelector(getName);
  const navigate = useNavigate();


  const onLogOut = () => {
    dispatch(authOperetions.logOut());
    navigate('/');
  }

    return (
        <UserMenuWrap >
      <UserMenuText >Welcome, <UserMenuName>{user} !</UserMenuName> </UserMenuText>
      <Button variant="contained" color="primary" size="small" type="button" onClick = {onLogOut} >
        Logout
      </Button>
    </UserMenuWrap>
    )
}