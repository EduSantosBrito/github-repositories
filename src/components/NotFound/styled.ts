import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-bottom: 5rem;

    & > img {
        width: 50rem;
    }
`;
