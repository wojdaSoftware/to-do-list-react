import { useState } from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';

function App() {
  const [hideFinished, setHideFinished] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Spać", done: false },
    { id: 2, content: "Grać", done: true },
  ]);

  const toggleHideFinished = () => {
    setHideFinished(hideFinished => !hideFinished);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const markTask = (id) => {
    setTasks(tasks => tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      };
      return task;
    }));
  };

  return (
    <Container>
      <Header title={"To-do list"} />
      <Section
        title={"Add a new task"}
        body={<Form />}
      />
      <Section
        title={"Task list"}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideFinished={hideFinished}
            toggleHideFinished={toggleHideFinished}
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
  );
}

export default App;
