import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
`;

export const HeaderTitle = styled.h1`
    color: var(--on-white);
    max-width: 63rem;
    text-align: center;
    font-family: "Mont";
    font-size: clamp(4.5rem, 4vw, 5.6rem);
`;

export const LastRepositoriesContainer = styled.main`
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 7.2rem 10% 10rem;
    background-color: var(--on-background-gray);
    gap: 3.2rem;

    @media screen and (min-width: 1024px) {
        padding: 7.2rem 5% 10rem;
    }
`;

export const RepositoryListContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3.2rem;
`;

export const LastRepositoriesTitle = styled.h2`
    text-align: center;
    font-family: "Sarabun";
    font-weight: 600;
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    color: var(--on-white);
`;
