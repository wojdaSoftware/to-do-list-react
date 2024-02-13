import { useSelector, useDispatch } from 'react-redux';
import { StyledContainer } from './styled.js';
import Button from '../../../common/Button';
import { toggleHideFinished, markAllTasks, selectHideFinished, selectAreTasksEmpty, selectIsEveryTaskDone } from '../tasksSlice.js';

const Buttons = () => {
    const hideFinished = useSelector(selectHideFinished);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const dispatch = useDispatch();

    return (
        !areTasksEmpty && (
            <StyledContainer>
                <Button
                    onClick={() => dispatch(toggleHideFinished())}
                    buttonText={hideFinished ? "Show finished" : "Hide finished"}
                />
                <Button
                    disabled={isEveryTaskDone}
                    onClick={() => dispatch(markAllTasks())}
                    buttonText={"Finish all"}
                />
            </StyledContainer>
        )
    );
}
export default Buttons;