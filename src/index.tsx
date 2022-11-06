import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
// import App from './App';
import theme from './Theme';
import SignIn from './components/pages/Login';
import Home from './components/pages/Landing_page';
import SignUp from './components/pages/SignUp';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <SignIn />
    </ThemeProvider>,
);