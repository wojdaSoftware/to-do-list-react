import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './GlobalStyle';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';
import useTasks from './useTasks';

const theme = {
  breakpoint: 767,
  colors: {
    background: "rgb(226, 226, 226)",
    primaryColor: "teal",
    activeColor: "hsl(180, 100%, 35%)",
  },
}

function App() {
  const { tasks, hideFinished, toggleHideFinished, markTask, markAllTasks, addTask, removeTask } = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header title={"To-do list"} />
        <Section
          title={"Add a new task"}
          body={<Form addTask={addTask} />}
        />
        <Section
          title={"Task list"}
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideFinished={hideFinished}
              toggleHideFinished={toggleHideFinished}
              markAllTasks={markAllTasks}
            />
          }
          body={
            <List
              tasks={tasks}
              hideFinished={hideFinished}
              removeTask={removeTask}
              markTask={markTask}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;