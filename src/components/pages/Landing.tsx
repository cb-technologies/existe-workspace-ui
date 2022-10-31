import * as React from 'react';
import {makeStyles} from "@mui/styles";
import {CssBaseline} from "@material-ui/core";
import Header from "../others/Header";

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    header: {
        background: 'none'
    }
}));

const LandingPage = (props:any) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />jkk
            <Header className={classes.header}/>
        </div>
    );
}

export default LandingPage;