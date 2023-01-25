import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from '@mui/material/styles';
import App from './App';
import theme from './Theme';
import {BrowserRouter} from "react-router-dom";
import ResponsiveAppBar from "./components/pages/AppBar"

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <ResponsiveAppBar/>
            <App/>
        </ThemeProvider>,
    </BrowserRouter>
);