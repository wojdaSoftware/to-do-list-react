import React from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';

const tasks = [
  { id: 1, content: "Spać", done: false },
  { id: 2, content: "Grać", done: true },
];
const hideFinished = false;

function App() {
  return (
    <main className="main">
      <Header title={"To-do list"} />
      <Section
        title={"Add a new task"}
        body={<Form />}
      />
      <Section
        title={"Task list"}
        extraHeaderContent={
          <Buttons tasks={tasks} hideFinished={hideFinished} />
        }
        body={
          <List tasks={tasks} hideFinished={hideFinished} />
        }
      />
    </main>
  );
}

export default App;
