// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import {useSelector } from 'react-redux';
// import { authSelectors } from '../redux/auth';

// /**
//  * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
//  * - В противном случае рендерит компонент
//  */
// export default function PublicRoute({
//   isAuthenticated,
//   redirectTo,
//   children,
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

//   return (
//     <Route {...routeProps}>
//       {isLoggedIn && routeProps.restricted ? (
//         <Redirect to={redirectTo} />
//       ) : (
//         children
//       )}
//     </Route>
//   );
// }
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/auth-selectors';

export default function PublicRoute({ children }) {
  const isToken = useSelector(getToken);

  if (isToken) {
    return <Navigate to="/Phonebook/contacts" replace />;
  }

  return children;
}