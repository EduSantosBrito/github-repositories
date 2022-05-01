import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { store } from "./store";
import montHeavyFontSrc from "./assets/fonts/Mont-HeavyDEMO.otf";

const GlobalStyle = createGlobalStyle`
  :root {
    --on-white: #ffffff;
    --on-background-gray: #101518;
    --on-typography: #576471;
    --on-dark-gray: #161D25;
    --on-light-gray: #3A4653;
    --on-lighter-gray: #A2A5A8;
    --on-hover-blue: #0C86CB;
    --on-darker-blue: #133A51;
    --on-dark-blue: #10AAFF;
    --on-light-blue: #4AE5FF;
  }

  @font-face {
    font-family: 'Mont';
    src: url(${montHeavyFontSrc}) format('opentype');
    font-style: bold;
    font-weight: bold;
    font-display: swap;
  }

  html {
    font-size: 62.5%;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: twentyFourHoursInMs,
        },
    },
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <GlobalStyle />
                    <App />
                </QueryClientProvider>
            </BrowserRouter>
        </ReduxProvider>
    </React.StrictMode>,
);
