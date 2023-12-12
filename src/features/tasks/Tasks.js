import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import useTasks from '../../useTasks';

function Tasks() {
  const {
    tasks,
    hideFinished,
    toggleHideFinished,
    markTask,
    markAllTasks,
    addTask,
    removeTask
  } = useTasks();

  return (
    <>
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
    </>
  );
}

export default Tasks;