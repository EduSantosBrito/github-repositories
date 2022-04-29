import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }
    html, body, #root {
        width: 100%;
        height: 100%;
    }
`;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>,
);
