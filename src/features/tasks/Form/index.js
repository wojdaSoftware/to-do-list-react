import { nanoid } from '@reduxjs/toolkit';
import { useState, useRef } from 'react';
import { Button, Input, Wrapper } from './styled.js';
import { useDispatch } from 'react-redux';
import { addTask } from '../tasksSlice.js';

const Form = () => {
    const dispatch = useDispatch();

    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }))

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