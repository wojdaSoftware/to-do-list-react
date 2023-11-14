import { useState } from 'react';
import { Button, Input, Wrapper } from './styled.js';

const Form = ({ addTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <Wrapper onSubmit={onFormSubmit}>
            <Input
                placeholder="What has to be done?"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button>Add the task</Button>
        </Wrapper>
    );
};

export default Form;