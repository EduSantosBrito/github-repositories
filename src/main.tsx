import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { store } from "./store";


const GlobalStyle = createGlobalStyle`
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
