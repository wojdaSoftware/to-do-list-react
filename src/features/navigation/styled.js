import { NavLink } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  list-style: none;
  text-align: center;
  max-width: 800px;
  margin: auto;
  display: grid;
  font-weight: bold;
  grid-template-columns: 1fr 1fr;
`;

export const Nav = styled.nav`
  background-color: teal;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  transition-duration: 300ms;
  padding: 10px;
  margin-top: 20px;
  width: 250px;
  display: inline-block;
  
  &:hover {
    color: lightblue;
  }
  
  &.active {
    color: teal;
    background-color: rgb(226, 226, 226);
    box-shadow: 0px -10px 18px -14px rgba(66, 68, 90, 1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint}px) {
    width: 170px;
  }
`;