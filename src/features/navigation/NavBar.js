import { Nav, List, StyledNavLink } from "./styled";

const NavBar = () => (
  <Nav>
    <List>
      <li>
        <StyledNavLink to="/tasks">Tasks</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/author">About the author</StyledNavLink>
      </li>
    </List>
  </Nav>
);

export default NavBar;