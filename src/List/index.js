import './style.css';

const List = ({ tasks, hideFinished, removeTask }) => (
    <ul className="list" >
        {tasks.map(task => (
            <li
                key={task.id}
                className={`list__item ${task.done && hideFinished ? "list__item--hidden" : ""}`}
            >
                <button className="list__button">{task.done ? "✔" : ""}</button>
                <p className={`list__paragragh ${task.done ? "list__paragraph--marked" : ""}`}>{task.content}</p>
                <button
                    className="list__button list__button--second"
                    onClick={() => removeTask(task.id)}
                >🗑️</button>
            </li>
        ))}
    </ul>
);

export default List;