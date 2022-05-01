import headerImageSrc from "../../assets/images/header.webp";
import headerMobileImageSrc from "../../assets/images/header-mobile.webp";
import styled from "styled-components";

export const Container = styled.header<{ small: boolean }>`
    background-image: url(${headerMobileImageSrc});
    background-size: cover;
    background-position: center center;
    height: ${props => (props.small ? "14rem" : "60rem")};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 7.2rem;

    @media screen and (min-width: 768px) {
        background-image: url(${headerImageSrc});
    }
`;
