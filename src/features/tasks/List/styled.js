import styled, { css } from "styled-components";

export const TaskList = styled.ul`
    padding: 0px 20px 20px 20px;
    list-style: none;
`;

export const TaskListItem = styled.li`
    border-bottom: rgb(226, 226, 226) solid 2px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 20px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Button = styled.button`
    border: none;
    border-radius: 0;
    background-color: green;
    display: block;
    width: 35px;
    height: 35px;
    align-self: center;
    color: white;
    padding: 3px 0 0 0;
    transition: 500ms;

    &:hover{
        background-color: rgb(0, 153, 0);
    }

    ${({ second }) => second && css`
        background-color: red;
        transition: 500ms;

        &:hover{
            background-color: rgb(255, 51, 51);
        }
    `}
`;

export const Content = styled.p`
    overflow-x: hidden;

    ${({ marked }) => marked && css`
        text-decoration: line-through;
    `}
`;