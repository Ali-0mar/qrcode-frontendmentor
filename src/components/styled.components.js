import styled from "styled-components";
export const Container = styled.div`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        background: var(--White);
        margin: auto;
        width: 300px;
        padding: 10px;
        border-radius: 10px;
`;

export const Img = styled.img`
        max-width: 100%;
        border-radius: 10px;
`;

export const StyledHeading = styled.h3`
        color: var(--Dark-blue);
        font-size: 22px;
        text-align: center;
        font-weight: 700;
        margin-top: 20px;
`;

export const StyledParagraph = styled.p`
        font-size: 15px;
        color: var(--Light-gray);
        font-weight: 400;
        max-width: 90%;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
`;
