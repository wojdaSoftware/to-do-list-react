import { useDispatch, useSelector } from 'react-redux';
import { fetchExampleTasks, selectLoading } from '../tasksSlice';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Container from '../../../common/Container'
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import Button from '../../../common/Button';
import FilterBar from './FilterBar';

const TasksPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Container>
      <Header title={"To-do list"} />
      <Section
        title={"Add a new task"}
        body={<Form />}
        extraHeaderContent={
          <Button
            disabled = {loading}
            onClick={() => dispatch(fetchExampleTasks())}
            buttonText={loading ? "Loading..." : "Download example tasks"}
          />
        }
      />
      <Section
        title={"Filter"}
        body={<FilterBar />}
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