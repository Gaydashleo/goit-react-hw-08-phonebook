import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const AuthNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &:hover,
  &:focus {
    color: #d95c5c;
    font-weight: 700;
  }
`;