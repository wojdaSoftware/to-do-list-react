import { useSelector, useDispatch } from 'react-redux';
import { StyledContainer, Button } from './styled.js';
import { selectTasksState, toggleHideFinished, markAllTasks } from '../tasksSlice.js';

const Buttons = () => {
    const { tasks, hideFinished } = useSelector(selectTasksState);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <StyledContainer>
                <Button onClick={() => dispatch(toggleHideFinished())}>
                    {hideFinished ? "Show" : "Hide"} finished
                </Button>
                <Button
                    disabled={tasks.every(({ done }) => done)}
                    onClick={() => dispatch(markAllTasks())}
                >
                    Finish all
                </Button>
            </StyledContainer>
        )
    );
}
export default Buttons;