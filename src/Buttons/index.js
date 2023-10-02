import React from 'react';
import './style.css';

const Buttons = ({ tasks, hideFinished }) => {
    return tasks.length > 0 && (
        <div className="gridContainer">
            <button className="gridContainer__button">
                {hideFinished ? "Show" : "Hide"} finished
            </button>
            <button
                className="gridContainer__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Finish all
            </button>
        </div>
    )
};
export default Buttons;