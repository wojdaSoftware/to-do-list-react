import styled from "styled-components";

export const ButtonComponent = styled.button`
    color: teal;
    background-color: white;
    border: none;
    padding: 0;
    padding-right: 20px;
    transition: 500ms;
    text-align: right;

    &:hover {
    color: ${({theme})=> theme.colors.activeColor};
    }

    &:disabled {
    color: rgb(158, 158, 158);
    }
`;