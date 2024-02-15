import { Link } from 'react-router-dom/cjs/react-router-dom.js';
import { markTask, removeTask, selectTasks, selectHideFinished } from '../../tasksSlice.js';
import { Button, TaskList, TaskListItem, Content } from './styled.js'
import { useSelector, useDispatch } from 'react-redux';

const List = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    const hideFinished = useSelector(selectHideFinished);

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
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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