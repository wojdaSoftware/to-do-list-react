import { HashRouter, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import TaskPage from "./features/tasks/TaskPage/TaskPage";
import TasksPage from "./features/tasks/TasksPage/TasksPage";
import AuthorPage from "./features/author/AuthorPage";
import NavBar from "./features/navigation/NavBar";

const App = () => (
  <HashRouter>
    <NavBar />
    <Switch>
      <Route path="/tasks/:id">
        <TaskPage />
      </Route>
      <Route path="/tasks">
        <TasksPage />
      </Route>
      <Route path="/author">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/tasks" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;