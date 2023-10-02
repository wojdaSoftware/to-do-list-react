import React from 'react';
import './style.css';

const Buttons = ({ tasks }) => {
    if (tasks.length > 0) {
        return (
            <div className="gridContainer">
                <button className="gridContainer__button">Hide finished</button>
                <button className="gridContainer__button" disabled={tasks.every(({ done }) => done)}>Finish all</button>
            </div>
        )
    } else {
        return (
            <div className="gridContainer" />
        )
    };
}
export default Buttons;