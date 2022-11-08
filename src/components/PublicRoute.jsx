import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/authSelectors';

export function PublicRoute({ children, restricted = false, redirectTo = '/' }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;

    return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

PublicRoute.propTypes = {
    children: propTypes.element,
    restricted: propTypes.bool,
    redirectTo: propTypes.string,
};

