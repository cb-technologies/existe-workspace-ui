import * as React from 'react';
import {makeStyles} from "@mui/styles";

import {AppBar, Collapse, IconButton, Toolbar} from "@mui/material";
import User from "./UserButton";
import MenuButton from "./MenuButton";
import {useEffect, useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
        background: 'none',
    },
    appbarTitle: {
        paddingBlockStart: 5,
        flexGrow: '1',
    },
    appbarLogo: {
        maxWidth: 80,
        margin: 'sticky'
    },
    container: {
        textAlign: 'center',
    },
    title: {
        fontSize: '6rem',
        color: '#ffff',
        textAlign: 'center'
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '5rem',
    },
    colorText: {
        color: '#0a1a4e',
    }

}));

const Header = (props:any) => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
      <div className={classes.root} id="header">
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <img src={process.env.PUBLIC_URL + '/assets/logo.svg.png'} alt="logo" className={classes.appbarLogo} />
                <h1 className={classes.appbarTitle}>
                    République Démocratique<br/> du Congo
                </h1>
                <MenuButton></MenuButton>
                <User></User>
            </Toolbar>
        </AppBar>
          <Collapse
              in={checked}
              {...(checked ? { timeout: 1000 } : {})}
          >
              <div className={classes.container}>
                  <h1 className={classes.title}>
                      Bienvenue <br />
                      sur <span className={classes.colorText}> EXISTE.</span>
                  </h1>
                  <Scroll to="place-to-visit" smooth={true}>
                      <IconButton>
                          <ExpandMoreIcon className={classes.goDown} />
                      </IconButton>
                  </Scroll>
              </div>
          </Collapse>
      </div>
    );
}

export default Header;