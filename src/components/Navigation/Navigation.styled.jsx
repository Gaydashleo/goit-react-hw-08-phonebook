import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: black;
  &:hover,
  &:focus {
    color: #d95c5c;
    font-weight: 700;
  }
  &.active {
    color: #d95c5c;

  }
`;