import styled from "styled-components";
import SearchIconSrc from "../../assets/icons/icon-search.svg";

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.5rem;
    box-sizing: border-box;
    width: clamp(20rem, 90vw, 60rem);
`;

export const SearchLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SearchInputContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--on-dark-gray);
    border: 0.1rem solid var(--on-light-gray);
    border-right: none;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    padding: 1.2rem 1.7rem;
    display: flex;
    gap: 1.2rem;
    &:focus-within {
        border: 0.1rem solid var(--on-dark-blue);
        border-right: none;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    color: var(--on-typography);
    font-size: clamp(1.2rem, 4vw, 1.8rem);
    font-family: "Sarabun";
    font-weight: 400;
    background-color: var(--on-dark-gray);
    border: none;
    outline: none;

    &::placeholder {
        color: var(--on-typography);
    }
`;

export const SearchButton = styled.button`
    cursor: pointer;
    height: 100%;
    width: 12rem;
    background: linear-gradient(57.38deg, var(--on-dark-gray) 4.78%, var(--on-darker-blue) 94.77%);
    border: 0.1rem solid var(--on-dark-blue);
    box-sizing: border-box;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    font-family: "Sarabun";
    font-weight: 700;
    color: var(--on-dark-blue);
    font-size: clamp(1.2rem, 4vw, 1.8rem); ;
`;

export const SearchIcon = styled.img.attrs({ src: SearchIconSrc })``;
