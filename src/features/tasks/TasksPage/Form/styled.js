import styled, { css } from "styled-components";

export const Wrapper = styled.form`
    padding: 20px;
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoint}px) {
        flex-wrap: wrap;
    }
`;

export const Input = styled.input`
    border: rgb(226, 226, 226) solid 2px;
    padding: 10px;
    border-radius: 0;
    flex-grow: 1;
    margin-right: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint}px) {
        flex-basis: 100%;
        margin-right: 0px;
        margin-bottom: 10px;
    }

    ${({noMargin}) => noMargin && css`
        margin-right: 0;
    `}
`;

export const Button = styled.button`
    border: none;
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: white;
    padding: 12px;
    transition: background 500ms 200ms, transform 500ms;

    &:hover {
        background-color: ${({ theme }) => theme.colors.activeColor};
        transform: scale(1.2);
    }

    &:active {
        transform: scale(1.1);
        transition-duration: 0ms;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint}px) {
        flex-basis: 100%;

        &:hover {
        transform: scaleY(1.2) scaleX(1.03);
        }

        &:active {
        transform: scaleY(1.1) scaleX(1.01);
        transition-duration: 0ms
        }
    }
`;