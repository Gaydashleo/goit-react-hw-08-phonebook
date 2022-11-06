import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import {useSelector } from 'react-redux';
import {getIsLoggedIn } from '../redux/auth/authSelectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
export default function PublicRoute({
    isAuthenticated,
    redirectTo,
    children,
    ...routeProps
}) {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Route {...routeProps}>
            {isLoggedIn && routeProps.restricted ? (
                <Navigate to={redirectTo} />
            ) : (
                children
            )}
        </Route>
    );
}

