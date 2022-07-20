import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import {legacy_createStore, compose, applyMiddleware} from "redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter >
  </React.StrictMode>
);

