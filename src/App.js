import { useState } from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';

const tasks = [
  { id: 1, content: "Spać", done: false },
  { id: 2, content: "Grać", done: true },
];


function App() {
  const [hideFinished, setHideFinished] = useState(false);

  const toggleHideFinished = () => {
    setHideFinished(hideFinished => !hideFinished);
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
          <List tasks={tasks} hideFinished={hideFinished} />
        }
      />
    </Container>
  );
}

export default App;
