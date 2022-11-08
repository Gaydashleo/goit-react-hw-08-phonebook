import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color:#33C1FF;
  &:hover,
  &:focus {
   color: #3336FF;
    font-weight: 900;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  &.active {
    color: #3336FF;

  }
`;