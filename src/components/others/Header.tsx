import * as React from 'react';
import {makeStyles, styled} from "@mui/styles";

import {AppBar, Collapse, IconButton, Toolbar} from "@mui/material";
import User from "./UserButton";
import MenuButton from "./MenuButton";
import {useEffect, useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles(() => ({
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
    }

}));

const TitleDiv = styled('div')(({}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
}))

const AppBarDiv = styled('h1')(({}) => ({
    paddingBlockStart: 5,
    flexGrow: '1',
}))

const ContainerDiv = styled('div')(({}) => ({
    textAlign: 'center',
}))

const HeadingDiv = styled('h1')(({}) => ({
    fontSize: '6rem',
    color: '#ffff',
    textAlign: 'center'
}))

const Header = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
      <TitleDiv>
          <AppBar sx={{ background: 'none', backgroundColor: 'none'}} elevation={0}>
              <Toolbar sx={{width: '80%', margin: '0 auto', background: 'none',}}>
                  <img src={process.env.PUBLIC_URL + '/assets/logo.svg.png'} alt="logo" className={classes.appbarLogo} />
                  <AppBarDiv>
                      République Démocratique<br/> du Congo
                  </AppBarDiv>
                  <MenuButton></MenuButton>
                  <User></User>
              </Toolbar>
          </AppBar>
          <Collapse
              in={checked}
              {...(checked ? { timeout: 1000 } : {})}
          >
              <ContainerDiv>
                  <HeadingDiv>
                      Bienvenue <br />
                      sur <span className={classes.colorText}> EXISTE.</span>
                  </HeadingDiv>

                  <Scroll to="sign-in-page" smooth={true}>
                      <IconButton>
                          <ExpandMoreIcon className={classes.goDown} />
                      </IconButton>
                  </Scroll>

              </ContainerDiv>
          </Collapse>
      </TitleDiv>
    );
}

export default Header;