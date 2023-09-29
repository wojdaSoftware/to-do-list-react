import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <header className="header">
        <h1>To-do list</h1>
      </header>
      <main className="main">
        <section className="section">
          <h2 className="section__title">Add a new task</h2>
          <form className="form">
            <input className="form__textInput" name="task" placeholder="What has to be done?" />
            <button className="form__button">Add the task</button>
          </form>
        </section>
        <section className="section">
          <header className="header header--second">
            <h2 className="header__title">Task list</h2>
            <div className="header__gridContainer" />
          </header>
          <ul className="list" />
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
