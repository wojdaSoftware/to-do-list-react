import styled from "styled-components";

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-row-gap: 10px;
        margin-bottom: 10px;
    }
`;

export const Button = styled.button`
    color: teal;
    background-color: white;
    border: none;
    padding: 0;
    transition: 500ms;

    &:hover {
    color: hsl(180, 100%, 35%);
    }

    &:disabled {
    color: rgb(158, 158, 158);
    }
`;