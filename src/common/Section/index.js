import { Header, StyledContainer, Title } from './styled';

const Section = ({title, extraHeaderContent, body}) => (
    <StyledContainer>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        {body}
    </StyledContainer>
);

export default Section;