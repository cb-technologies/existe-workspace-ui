import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import Orientation from './components/OrientationPage'
import theme from './Theme';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import MainRouter from './components/pages/MainRouter';
import RegisterForm from './components/pages/RegisterForm';
import { BrowserRouter } from "react-router-dom"


const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
    <BrowserRouter>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App/>
    </ThemeProvider>,
    </BrowserRouter>

);