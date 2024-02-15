import { Link } from "react-router-dom/cjs/react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/tasks">Tasks</Link>
      </li>
      <li>
        <Link to="/author">About the author</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;