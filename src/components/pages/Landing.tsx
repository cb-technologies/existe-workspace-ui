import * as React from 'react';
import { styled} from "@mui/styles";
import Header from "../others/Header";

const LandingDiv = styled('div')(({}) => ({
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}));

const LandingPage = () => {
    return (
        <LandingDiv> <Header /> </LandingDiv>

    );
}

export default LandingPage;