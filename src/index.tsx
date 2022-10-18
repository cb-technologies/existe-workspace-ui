import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App.tsx';

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
