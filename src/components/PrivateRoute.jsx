import propTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getIsRefreshing } from '../redux/auth/authSelectors';


export function PrivateRoute({ children, redirectTo = '/' }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isRefreshing = useSelector(getIsRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : children ;
}

PrivateRoute.propTypes = {
    children: propTypes.element,
    redirectTo: propTypes.string,
};

