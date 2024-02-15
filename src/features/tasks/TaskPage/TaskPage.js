import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Section from "../../../common/Section";
import Button from "../../../common/Button";
import { selectTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";
import { Paragraph } from "../../author/styled";

const TaskPage = () => {
  const history = useHistory();
  const params = useParams();
  const task = useSelector(state => selectTaskById(state, params.id))

  return (
    <Container>
      <Header title={"Task details"} />
      <Section
        title={task ? task.content : "Task not found!"}
        body={
          task && (
            <Paragraph>
              <strong>Finished: </strong> {task.done ? "Yes" : "No"}
            </Paragraph>
          )
        }
        extraHeaderContent={
          <Button
            onClick={() => history.push("/zadania")}
            buttonText={"Back to task list"}
          />
        }
      />
    </Container>
  );
}

export default TaskPage;