// import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../redux/auth';

// /**
//  * - Если маршрут приватный и пользователь залогинен, рендерит компонент
//  * - В противном случае рендерит Redirect на /login
//  */
// export default function PrivateRoute({
//   isAuthenticated,
//   redirectTo,
//   children,
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated); 
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Redirect to={redirectTo} />}
//     </Route>
//   );
//     }

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/auth-selectors';

export default function ProtectedRoute({ children }) {
  const isToken = useSelector(getToken);

  if (!isToken) {
    return <Navigate to="/Phonebook/login" replace />;
  }

  return children;
}



