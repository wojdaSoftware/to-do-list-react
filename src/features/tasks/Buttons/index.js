import './styled.js';
import { StyledContainer, Button } from './styled.js';

const Buttons = ({ tasks, hideFinished, toggleHideFinished, markAllTasks }) => (
    tasks.length > 0 && (
        <StyledContainer>
            <Button onClick={toggleHideFinished}>
                {hideFinished ? "Show" : "Hide"} finished
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={markAllTasks}
            >
                Finish all
            </Button>
        </StyledContainer>
    )
);
export default Buttons;