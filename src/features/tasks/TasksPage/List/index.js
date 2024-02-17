import { markTask, removeTask, selectHideFinished, selectTasksByQuery } from '../../tasksSlice.js';
import { Button, TaskList, TaskListItem, Content, StyledTaskNavLink } from './styled.js'
import { useSelector, useDispatch } from 'react-redux';
import searchQueryParamName from '../../searchQueryParamName.js';
import { useQueryParameters } from '../../queryParameters.js';

const List = () => {
  const dispatch = useDispatch();
  const hideFinished = useSelector(selectHideFinished);
  const query = useQueryParameters(searchQueryParamName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));

  return (
    <TaskList>
      {tasks.map(task => (
        <TaskListItem
          key={task.id}
          hidden={task.done && hideFinished}
        >
          <Button onClick={() => dispatch(markTask(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content marked={task.done}>
            <StyledTaskNavLink to={`/tasks/${task.id}`}>{task.content}</StyledTaskNavLink>
          </Content>
          <Button
            second
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑️
          </Button>
        </TaskListItem>
      ))}
    </TaskList>
  );
}

export default List;