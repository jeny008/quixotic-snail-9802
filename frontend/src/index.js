
import reportWebVitals from "./reportWebVitals";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Store } from './redux/store';
import { positions, Provider as Providers } from "react-alert";
import AlertTemplate from 'react-alert-template-basic'
// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints })

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Providers template={AlertTemplate} {...options}>
      <Provider store={Store}>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
      </Provider>
    </Providers>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
