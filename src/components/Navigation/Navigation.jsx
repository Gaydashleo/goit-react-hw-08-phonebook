import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { NavigationLink } from './Navigation.styled';

export const Navigation = () => {

    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <>
            <nav>
                <NavigationLink to="/">Home</NavigationLink>
                {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
                
            </nav>
        </>
    )
};

