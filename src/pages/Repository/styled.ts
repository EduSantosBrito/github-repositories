import styled from "styled-components";
import StarIconSrc from "../../assets/icons/icon-star.svg";
import EyeIconSrc from "../../assets/icons/icon-eye.svg";
import ForkIconSrc from "../../assets/icons/icon-fork.svg";
import IssuesIconSrc from "../../assets/icons/icon-issues.svg";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
`;

export const HeaderTitle = styled.h1`
    font-family: "Sarabun";
    font-size: 3.2rem;
    font-weight: 600;
    color: var(--on-white);
`;

export const RepositoryContainer = styled.main`
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

export const RepositoryLink = styled.a`
    text-decoration: none;

    & > h3 {
        font-family: "Sarabun";
        color: var(--on-dark-blue);
        font-size: clamp(1.2rem, 3vw, 1.8rem);
        font-weight: 600;
        line-height: clamp(2rem, 3vw, 2.6rem);
        &:hover {
            color: var(--on-hover-blue);
        }
    }
`;

export const RepositoryTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.6rem;

    & > span {
        font-family: "Sarabun";
        font-size: clamp(1.2rem, 3vw, 2rem);
        font-weight: 600;
        line-height: clamp(2rem, 1vw, 2.6rem);
        color: var(--on-light-gray);
    }
`;

export const StarIcon = styled.img.attrs({ src: StarIconSrc })``;

export const EyeIcon = styled.img.attrs({ src: EyeIconSrc })``;

export const ForkIcon = styled.img.attrs({ src: ForkIconSrc })``;

export const IssuesIcon = styled.img.attrs({ src: IssuesIconSrc })``;

export const RepositoryStats = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    & > p {
        font-family: "Sarabun";
        font-size: clamp(1rem, 3vw, 1.6rem);
        font-weight: 400;
        color: var(--on-lighter-gray);
    }

    & > img {
        width: 1.2rem;
    }

    @media screen and (min-width: 768px) {
        & > img {
            width: 1.6rem;
        }
    }
`;

export const RepositoryStatsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2.4rem;
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 2.4rem;
`;
