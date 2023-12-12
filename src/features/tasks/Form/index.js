import { useState, useRef } from 'react';
import { Button, Input, Wrapper } from './styled.js';

const Form = ({ addTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskContent.trim());
        setNewTaskContent("");
        focusInput();
    };

    return (
        <Wrapper onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                placeholder="What has to be done?"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button>Add the task</Button>
        </Wrapper>
    );
};

export default Form;