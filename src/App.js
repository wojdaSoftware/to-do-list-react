import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';

function App() {
  const tasksLocalStorageKey = "tasks";
  const hideFinishedLocalStorageKey = "hideFinished";

  const getLocalStorageItem = (localStorageKey, noLocalStorageValue) => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || noLocalStorageValue;
  };

  const [hideFinished, setHideFinished] = useState(getLocalStorageItem(hideFinishedLocalStorageKey, false));
  const [tasks, setTasks] = useState(getLocalStorageItem(tasksLocalStorageKey, []));

  useEffect(() => {
    localStorage.setItem(tasksLocalStorageKey, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem(hideFinishedLocalStorageKey, JSON.stringify(hideFinished));
  }, [hideFinished]);

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

  const markAllTasks = () => {
    setTasks(tasks => tasks.map((task) => {
      if (task.done === false) {
        return { ...task, done: !task.done };
      };
      return task;
    }))
  };

  const addTask = (content) => {
    if (content !== "") {
      setTasks(tasks => [
        ...tasks,
        {
          id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
          content,
          done: false,
        },
      ]);
    }
  }

  return (
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
  );
}

export default App;