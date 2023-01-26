import * as React from 'react';
import Header from "./Header";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../../Theme";

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
        <ThemeProvider theme={theme}>
            <div style={styles.div}>
                <CssBaseline/>
                <Header/>
            </div>
        </ThemeProvider>

    );
}

export default LandingPage;