import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header';

const Tasks = () => (
  <>
    <Header title={"To-do list"} />
    <Section
      title={"Add a new task"}
      body={<Form />}
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
  </>
);

export default Tasks;