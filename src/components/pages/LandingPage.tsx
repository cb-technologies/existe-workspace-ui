import * as React from 'react';
import Header from "./Header";
import {CssBaseline} from "@mui/material";

const styles = {
    div: {
        minHeight: '105vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/landingpage.jpeg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}

const LandingPage = () => {
    return (
        <div style={styles.div}>
            <CssBaseline/>
            <Header/>
        </div>
    );
}

export default LandingPage;