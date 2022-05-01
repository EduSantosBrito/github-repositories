import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;

    @media screen and (min-width: 768px) {
        grid-column: 1/3;
    }
`;

export const PaginationList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    @media screen and (min-width: 768px) {
        gap: 1rem;
    }
`;

export const PaginationItem = styled.li`
    list-style: none;
`;

export const PaginationNumber = styled.button`
    background-color: transparent;
    min-width: 3.2rem;
    padding: 0.5rem 1rem;
    font-size: clamp(1rem, 3vw, 1.4rem);
    font-style: normal;
    line-height: 2rem;
    color: var(--on-white);
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: border-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);

    &:hover {
        text-decoration: none;
        border-color: var(--on-light-gray);
        transition-duration: 0.1s;
    }

    &[aria-current="page"] {
        background-color: var(--on-dark-blue);
        &:hover {
            text-decoration: none;
            border: 1px solid var(--on-dark-blue);
            transition-duration: 0.1s;
        }
    }
`;

export const PaginationDots = styled.span`
    font-family: "Sarabun";
    font-size: 2rem;
    color: var(--on-lighter-gray);
    cursor: default;
    border-color: transparent;
`;

export const PaginationButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border: none;
    outline: none;

    border: 1px solid transparent;
    border-radius: 6px;
    transition: border-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    &:hover {
        text-decoration: none;
        border: 1px solid var(--on-light-gray);
        transition-duration: 0.1s;
    }
    & > p {
        display: none;
    }
    @media screen and (min-width: 768px) {
        & > p {
            display: block;
        }
        padding: 0.5rem 1rem;
    }
    &[aria-disabled="true"] {
        color: var(--on-lighter-gray);
    }
    &[aria-disabled="false"] {
        color: var(--on-dark-blue);
    }
    &[aria-keyshortcuts="ArrowLeft"] {
        ::before {
            content: "";
            display: inline-block;
            width: 1.6rem;
            height: 1.6rem;
            vertical-align: text-bottom;
            background-color: currentColor;
            clip-path: polygon(
                9.8px 12.8px,
                8.7px 12.8px,
                4.5px 8.5px,
                4.5px 7.5px,
                8.7px 3.2px,
                9.8px 4.3px,
                6.1px 8px,
                9.8px 11.7px,
                9.8px 12.8px
            );
        }
    }
    &[aria-keyshortcuts="ArrowRight"] {
        ::after {
            content: "";
            display: inline-block;
            width: 1.6rem;
            height: 1.6rem;
            vertical-align: text-bottom;
            background-color: currentColor;
            clip-path: polygon(
                6.2px 3.2px,
                7.3px 3.2px,
                11.5px 7.5px,
                11.5px 8.5px,
                7.3px 12.8px,
                6.2px 11.7px,
                9.9px 8px,
                6.2px 4.3px,
                6.2px 3.2px
            );
        }
    }
`;
