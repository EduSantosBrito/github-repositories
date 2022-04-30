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
    height: 60rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 7.2rem;

    @media screen and (min-width: 768px) {
        background-image: url(${headerImageSrc});
    }
`;

export const HeaderTitle = styled.h1`
    color: white;
    max-width: 63rem;
    text-align: center;
    font-family: "Mont";
    font-size: clamp(4.5rem, 4vw, 5.6rem);
`;

export const LastRepositoriesContainer = styled.main``;
