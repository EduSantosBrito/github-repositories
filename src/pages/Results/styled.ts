import styled from "styled-components";
import headerImageSrc from "../../assets/images/header.webp";
import headerMobileImageSrc from "../../assets/images/header-mobile.webp";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
`;

export const HeaderContainer = styled.header`
    background-image: url(${headerMobileImageSrc});
    background-size: cover;
    background-position: center center;
    height: 14rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 7.2rem;

    @media screen and (min-width: 768px) {
        background-image: url(${headerImageSrc});
    }
`;

export const ResultContainer = styled.main`
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

export const ResultListContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3.2rem;
`;

export const ResultTitle = styled.h1`
    text-align: center;
    font-family: "Sarabun";
    font-weight: 600;
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    color: var(--on-white);
`;

export const ResultBack = styled.a`
    font-family: "Sarabun";
    font-size: 1.4rem;
    color: var(--on-white);
    transition: color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    cursor: pointer;
    &:hover {
        color: var(--on-lighter-gray);
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ::before {
        content: "";
        display: inline-block;
        width: 1.6rem;
        height: 1.6rem;
        vertical-align: text-bottom;
        background-color: currentColor;
        clip-path: polygon(
            10.8px 13.8px,
            9.7px 13.8px,
            5.5px 9.5px,
            5.5px 8.5px,
            9.7px 4.2px,
            10.8px 5.3px,
            7.1px 9px,
            10.8px 12.7px,
            10.8px 13.8px
        );
    }
`;
