import { useState } from 'react';
import './style.css';

const Form = ({addTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="form__textInput"
                placeholder="What has to be done?"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <button className="form__button">Add the task</button>
        </form>
    );
};

export default Form;