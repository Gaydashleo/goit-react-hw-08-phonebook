import { useSelector, useDispatch } from 'react-redux';
import { getName } from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperation';
import { useNavigate } from 'react-router-dom';
// import defaultAvatar from '../../img/Avatar';
import Button from '@mui/material/Button';
import { UserWrap, UserText, UserName } from './UserMenu.styled';

export default function UserMenu() {
const dispatch = useDispatch();
  const user = useSelector(getName);
  const navigate = useNavigate();

  const onLogOut = () => {
    dispatch(authOperations.logOut());
    navigate('/');
  }


  return (
    <UserWrap>
      {/* <img src={defaultAvatar}
        alt="Default Avatar"
        width="32" /> */}
      <UserText> WELCOME, <UserName> {user} ! </UserName></UserText>
      <Button
        variant="contained"
        color="error"
        size="small"
        type="button"
        onClick={onLogOut}>
      </Button>
    </UserWrap>
  )
}