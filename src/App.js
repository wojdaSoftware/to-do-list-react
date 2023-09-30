import React from 'react';
import Form from './Form';
import List from './List';

const tasks = [
  { id: 1, content: "Spać", done: false },
  { id: 2, content: "Grać", done: true },
];
const hideFinished = false;

function App() {
  return (
    <React.Fragment>
      <header className="header">
        <h1>To-do list</h1>
      </header>
      <main className="main">
        <section className="section">
          <h2 className="section__title">Add a new task</h2>
          <Form />
        </section>
        <section className="section">
          <header className="header header--second">
            <h2 className="header__title">Task list</h2>
            <div className="header__gridContainer" />
          </header>
          <List tasks={tasks} hideFinished={hideFinished} />
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
