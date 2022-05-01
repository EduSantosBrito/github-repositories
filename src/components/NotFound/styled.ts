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

    & > p {
        font-family: "Sarabun";
        font-size: clamp(1.2rem, 3vw, 2rem);
        font-weight: 600;
        line-height: clamp(2rem, 1vw, 2.6rem);
        color: var(--on-white);
    }
`;
