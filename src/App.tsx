import * as React from 'react';
import MainRouter from "./components/pages/MainRouter";
import ReactDOM from 'react-dom';
import './index.css';
import Router from "react-router-dom";

import Amplify from 'aws-amplify'
import config from './aws-exports'
// Amplify.Configure(config)

// ReactDOM.render(<Router />, document.getElementById('root'));


export default function App() {
    return (
        <MainRouter/>
        // <LandingPage></LandingPage>
    );
}
