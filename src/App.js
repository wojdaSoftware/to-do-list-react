import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

const App = () => (
  <HashRouter>
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
    <Switch>
      <Route path="/tasks">
        <Tasks />
      </Route>
      <Route path="/author">
        <Author />
      </Route>
      <Route path="/">
        <Redirect to="/tasks" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;