import styled from "styled-components";

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${({theme})=> theme.breakpoint}px) {
        grid-template-columns: 1fr;
        grid-row-gap: 10px;
        margin-bottom: 10px;
    }
`;