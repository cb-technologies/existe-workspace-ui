import * as React from 'react';
import {useEffect, useState} from 'react';

import {AppBar, Collapse, Toolbar, Typography} from "@mui/material";
import User from "./UserButton";
import MenuButton from "./MenuButton";
// import {Link as Scroll} from 'react-scroll';

const useStyles = {
    appbar: {
        background: 'none',
        backgroundColor: 'none',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
        background: 'none',
    },
    appbarLogo: {
        maxWidth: 100,
        margin: 'sticky',
        marginRight: 10,
        marginBottom: 10
    },
    goDown: {
        color: '#ffffff',
        fontSize: '5rem',
    },
    colorText: {
        color: '#0a1a4e',
    },
    titleDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appBar: {
        paddingBlockStart: 5,
        flexGrow: '1',
    },

    container: {
        textAlign: 'center',
    },

    heading: {
        fontSize: '6rem',
        color: '#ffff',
        textAlign: 'center'
    }
};

const Header = () => {

    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div style={useStyles.titleDiv}>
            <AppBar sx={{background: 'none', backgroundColor: 'none'}} elevation={0}>
                <Toolbar sx={{width: '80%', margin: '0 auto', background: 'none',}}>
                    <img src={process.env.PUBLIC_URL + '/assets/logo.svg.png'} alt="logo"
                         style={useStyles.appbarLogo}/>
                    <h1 style={useStyles.appBar}>
                        République Démocratique<br/> du Congo
                    </h1>
                    <MenuButton></MenuButton>
                    <User></User>
                </Toolbar>
            </AppBar>
            <Collapse
                in={checked}
                {...(checked ? {timeout: 1000} : {})}
            >
                <Typography sx={useStyles.container}>
                    <Typography variant="h1" sx={useStyles.heading}>
                        Bienvenue <br/>
                        sur <span style={useStyles.colorText}> EXISTE.</span>
                    </Typography>

                    {/*<Scroll to="sign-in-page" smooth={true}>*/}
                    {/*    <IconButton>*/}
                    {/*        <ExpandMoreIcon style={useStyles.goDown}/>*/}
                    {/*    </IconButton>*/}
                    {/*</Scroll>*/}

                </Typography>
            </Collapse>
        </div>
    );
}

export default Header;