import * as React from 'react';
import {useEffect, useState} from 'react';
import {AppBar, Box, Collapse, Toolbar, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import MenuButton from "../others/MenuButton";
import User from "../others/UserButton";

const styles = {
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
        color: '#045E92',
    },

    titleDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appBarDiv: {
        paddingBlockStart: 5,
        flexGrow: '1',
    },
};

const DynamicAppBar = () => {

    return (
        <div>
            <AppBar sx={{backgroundColor: '0C089E'}} elevation={0}>
                <Toolbar sx={{width: '80%', margin: '0 auto', background: 'none',}}>
                    <img src={process.env.PUBLIC_URL + '/assets/logo.svg.png'} alt="logo"
                         style={styles.appbarLogo}/>
                    <Typography style={styles.appBarDiv}>
                        République Démocratique<br/> du Congo
                    </Typography>
                    <MenuButton></MenuButton>
                    <User></User>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const Header = () => {
    let navigate = useNavigate();
    const signInRouteChange = () => {
        let path = `/signIn`;
        navigate(path);
    }

    const signUpRouteChange = () => {
        let path = `/signUp`;
        navigate(path);
    }

    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div style={styles.titleDiv}>
            <Collapse
                in={checked}
                {...(checked ? {timeout: 1000} : {})}
            >
                <Typography sx={{textAlign: 'center',}}>
                    <Typography sx={{
                        fontSize: '6rem',
                        color: '#ffff',
                        textAlign: 'center'
                    }}>
                        Bienvenue <br/>
                        sur <span style={styles.colorText}> EXISTE.</span>
                    </Typography>
                    <div></div>
                    <Box sx={{'& button': {m: 1}}}>
                        <div>
                            <Button variant="contained"
                                    size="large"
                                    onClick={signInRouteChange}
                                    style={{width: '200px', height: '100px', marginRight: '100px', marginTop: '150px'}}>
                                Se Connecter

                            </Button>
                            {/* <Button style={{width: '200px', height: '100px', marginTop: '150px'}}
                                    color="success"
                                    variant="contained"
                                    size="large"
                                    onClick={signUpRouteChange}>
                                Créer un nouveau compte
                            </Button> */}

                        </div>
                    </Box>

                    {/*<IconButton>*/}
                    {/*    <ExpandMoreIcon style={styles.goDown}/>*/}
                    {/*</IconButton>*/}

                </Typography>
            </Collapse>
        </div>
    );
}

export default Header;