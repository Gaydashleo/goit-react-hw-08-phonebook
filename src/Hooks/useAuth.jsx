import { useSelector } from 'react-redux';

export const useAuth = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.user);
  const user = useSelector(state => state.auth.isRefreshing);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};