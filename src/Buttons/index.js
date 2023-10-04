import './style.css';

const Buttons = ({ tasks, hideFinished, toggleHideFinished, markAllTasks }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button
                className="buttons__button"
                onClick={toggleHideFinished}
            >
                {hideFinished ? "Show" : "Hide"} finished
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
                onClick={markAllTasks}
            >
                Finish all
            </button>
        </div>
    )
);
export default Buttons;