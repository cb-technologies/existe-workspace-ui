import * as React from 'react';
import Header from "../others/Header";

const styles = {
    landing: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
};


const LandingPage = () => {
    return (
        <div style={styles.landing}><Header/></div>

    );
}

export default LandingPage;