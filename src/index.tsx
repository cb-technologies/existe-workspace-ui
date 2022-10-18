import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App.tsx';
import {createRoot} from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <CssBaseline />
        <App />
    </React.StrictMode>,
);
