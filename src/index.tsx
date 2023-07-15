import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import reportWebVitals from './reportWebVitals';
import {App} from "./App";
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter} from "react-router-dom";
import "./app/index.css"
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();
