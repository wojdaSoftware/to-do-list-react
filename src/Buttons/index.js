import './style.css';

const Buttons = ({ tasks, hideFinished }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button className="buttons__button">
                {hideFinished ? "Show" : "Hide"} finished
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Finish all
            </button>
        </div>
    )
);
export default Buttons;