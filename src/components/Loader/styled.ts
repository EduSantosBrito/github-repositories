import styled from "styled-components";

export const Container = styled.div<{ height?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    height: ${props => props.height || "100%"};
    width: 100%;
    background-color: var(--on-background-gray);
`;
