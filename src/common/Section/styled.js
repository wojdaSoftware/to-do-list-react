import styled from "styled-components";

export const StyledContainer = styled.section`
    background-color: white;
    margin-bottom: 15px;
    box-shadow: 0px 0px 10px -5px rgba(107, 107, 107, 1);
`;

export const Header = styled.header`
    margin: 0 auto;
    border-bottom: rgb(226, 226, 226) solid 2px;
    display: grid;
    grid-template-columns: 1fr 300px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
    padding: 20px;
`;