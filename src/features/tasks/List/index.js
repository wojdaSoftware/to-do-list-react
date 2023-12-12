import { Button, TaskList, TaskListItem, Content } from './styled.js'

const List = ({ tasks, hideFinished, removeTask, markTask }) => (
    <TaskList>
        {tasks.map(task => (
            <TaskListItem
                key={task.id}
                hidden={task.done && hideFinished}
            >
                <Button onClick={() => markTask(task.id)}>
                    {task.done ? "✔" : ""}
                </Button>
                <Content marked={task.done}>
                    {task.content}
                </Content>
                <Button
                    second
                    onClick={() => removeTask(task.id)}
                >
                    🗑️
                </Button>
            </TaskListItem>
        ))}
    </TaskList>
);

export default List;