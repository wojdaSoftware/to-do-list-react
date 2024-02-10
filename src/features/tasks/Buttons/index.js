import { useSelector, useDispatch } from 'react-redux';
import { StyledContainer, Button } from './styled.js';
import { toggleHideFinished, markAllTasks, selectHideFinished, selectAreTasksEmpty, selectIsEveryTaskDone } from '../tasksSlice.js';

const Buttons = () => {
    const hideFinished = useSelector(selectHideFinished);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const dispatch = useDispatch();

    return (
        !areTasksEmpty && (
            <StyledContainer>
                <Button onClick={() => dispatch(toggleHideFinished())}>
                    {hideFinished ? "Show" : "Hide"} finished
                </Button>
                <Button
                    disabled={isEveryTaskDone}
                    onClick={() => dispatch(markAllTasks())}
                >
                    Finish all
                </Button>
            </StyledContainer>
        )
    );
}
export default Buttons;