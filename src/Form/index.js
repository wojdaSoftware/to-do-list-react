import React from "react";
import './style.css';

const Form = () => (
    <form className="form">
        <input className="form__textInput" name="task" placeholder="What has to be done?" />
        <button className="form__button">Add the task</button>
    </form>
);

export default Form;