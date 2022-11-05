import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
// const styles = {
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 700,
//     color: '#2A363B',
//   },
//   activeLink: {
//     color: '#E84A5F',
//   },
// };

 const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      end
      style={s.link}
      activestyle={s.activeLink}
    >
      Sign up
    </NavLink>
    <NavLink
      to="/login"
      end
      style={s.link}
      activestyle={s.activeLink}
    >
      Log in
    </NavLink>
  </div>
);

export default AuthNav;