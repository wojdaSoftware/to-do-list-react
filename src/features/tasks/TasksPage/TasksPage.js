import { useDispatch } from 'react-redux';
import { fetchExampleTasks } from '../tasksSlice';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Container from '../../../common/Container'
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import Button from '../../../common/Button';

const TasksPage = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header title={"To-do list"} />
      <Section
        title={"Add a new task"}
        body={<Form />}
        extraHeaderContent={
          <Button
            onClick={() => dispatch(fetchExampleTasks())}
            buttonText={"Pobierz przykładowe zadania"}
          />
        }
      />
      <Section
        title={"Task list"}
        extraHeaderContent={
          <Buttons />
        }
        body={
          <List />
        }
      />
    </Container>
  );
}

export default TasksPage;