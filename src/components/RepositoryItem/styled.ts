import styled from "styled-components";
import StarIconSrc from "../../assets/icons/icon-star.svg";
import EyeIconSrc from "../../assets/icons/icon-eye.svg";
import ForkIconSrc from "../../assets/icons/icon-fork.svg";
import IssuesIconSrc from "../../assets/icons/icon-issues.svg";

export const Container = styled.li`
    box-sizing: border-box;
    max-width: 44rem;
    width: 100%;
    position: relative;
    list-style: none;
    background-color: var(--on-dark-gray);
    border: 0.1rem solid var(--on-light-gray);
    padding: clamp(1.2rem, 4vw, 2.4rem);
    border-radius: 0.8rem;
    cursor: pointer;

    &:hover {
        background-color: var(--on-darker-gray);
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
    margin-bottom: 2.4rem;

    & > span {
        font-family: "Sarabun";
        font-size: clamp(1.2rem, 3vw, 2rem);
        font-weight: 600;
        line-height: clamp(2rem, 1vw, 2.6rem);
        color: var(--on-light-gray);
    }
`;

export const RepositoryDescription = styled.p`
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 400;
    font-size: clamp(1.2rem, 3vw, 1.6rem);
    color: var(--on-white);
    margin: 0 0 1.6rem 2.4rem;
    word-break: break-word;

    @media screen and (min-width: 768px) {
        margin: 1.6rem 0;
    }
`;

export const RepositoryFooter = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.4rem;
    row-gap: 1.6rem;

    @media screen and (min-width: 768px) {
        gap: 3.6rem;
    }
`;

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

export const StarRepositoryStats = styled(RepositoryStats)`
    position: absolute;
    top: 3.6rem;
    right: 2.4rem;

    @media screen and (min-width: 425px) {
        top: 2.4rem;
    }
`;

export const StarIcon = styled.img.attrs({ src: StarIconSrc })``;

export const EyeIcon = styled.img.attrs({ src: EyeIconSrc })``;

export const ForkIcon = styled.img.attrs({ src: ForkIconSrc })``;

export const IssuesIcon = styled.img.attrs({ src: IssuesIconSrc })``;

export const RepositoryLanguage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 1.6rem;
    background: linear-gradient(110.5deg, #267ccb 5.85%, #39bdc6 100%);
    border-radius: 9.5px;

    & > p {
        font-family: "Sarabun";
        font-style: normal;
        font-weight: 600;
        line-height: 1rem;
        font-size: 1rem;
        text-transform: uppercase;
        color: var(--on-background-gray);
    }

    @media screen and (min-width: 768px) {
        margin-left: auto;
    }
`;
