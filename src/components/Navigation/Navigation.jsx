import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import s from './Navigation.module.css';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return(
  <nav>
      <NavLink to="/"
        end
        style={styles.link}
        activestyle={s.activeLink}>
      Home
    </NavLink>

    {isLoggedIn && (
      <NavLink
        to="/contacts"
        end
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
  );
}
  
// export default Navigation;