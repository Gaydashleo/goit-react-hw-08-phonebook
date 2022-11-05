import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import Button from '@material-ui/core/Button';



export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <>
      <img src={defaultAvatar}
        alt="Default Avatar"
        width="32" />
    
      <span>Welcome, {name}</span>
      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </Button>

    </>
  );

}