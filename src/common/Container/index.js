import { StyledContainer } from './styled.js';

const Container = ({children}) => (
    <StyledContainer className="main">
        {children}
    </StyledContainer>
);

export default Container;