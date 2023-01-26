import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import styles from "../styles/carteGenerationStyle";
import { css } from "aphrodite/no-important";
import { Auth } from 'aws-amplify';
import { Navigate, useNavigate } from 'react-router-dom';
import { URLExistPath } from "../../constants/existUrlPath";
import { useEffect, useState } from 'react';
import {CssBaseline} from "@mui/material";

const pages = [''];
const settings = ['Logout'];
// const settings = [
//   {
//     title: "Profile",
//     page: URLExistPath.RegisterPage,
//     flag: "to_register",
//   },
//   {
//     buttonText: "Actualiser Un Citoyen",
//     buttonVariant: "outlined",
//     icon: BrowserUpdatedIcon,
//     page: URLExistPath.RetrieveUserInfo,
//     flag: "to_update",
//   },
//   {
//     buttonText: "Generer carte d'identitée",
//     buttonVariant: "outlined",
//     icon: PermIdentityIcon,
//     page: URLExistPath.RetrieveUserInfo,
//     flag: "to_generate",
//   },
// ];




function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const navigateTo = (page: string, flag: string) => {
    navigate(page,{ state: { flag_to_page: flag } });
  };
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [user, setUser] = useState(null);

  // Auth.currentAuthenticatedUser().then(user => setUser(user))
  //   .catch(() => setUser(null));

  // Auth.onAuthUIStateChange((nextAuthState, authData) => {
  //     if (nextAuthState === 'signedIn') {
  //       // the user is signed in
  //       setUser(authData.user)
  //     } else if (nextAuthState === 'signedOut') {
  //       // the user is signed out
  //       setUser(null)
  //     }
  // });

  // Auth.currentAuthenticatedUser()
  // .then(user => {
  //   console.log(user)
  //   setIsLoggedIn(true);
  //   setRole(user.attributes['custom:role'])
  //   setNom(user.attributes['custom:nom'])
  //   setPrenom(user.attributes['custom:prenom'])
  //   setPhoneNumber(user.attributes['custom:phonenumber'])
  // })
  // .catch(err => {
  //   console.log(err)
  //   console.log("Petage")
  //   setIsLoggedIn(false);
  //   navigateTo(URLExistPath.SignInPage, "to_sign_in");
  // });

  // Auth.onAuthStateChange(user => {
  //   if (user) {
  //     console.log('User is signed in')
  //   } else {
  //     console.log('User is signed out')
  //   }
  // })

  useEffect(() => {
    console.log("arriviO yeba tseng")
    console.log(isLoggedIn)
    async function checkAuth() {
      try {
        const user = await Auth.currentUserInfo();
        console.log("arriving")
        setIsLoggedIn(true);
      } catch {
        console.log("Petage")
        setIsLoggedIn(false);
      }
    }
    checkAuth();
  }, [isLoggedIn]);

  const signOut = async () => {
    try {
      await Auth.signOut();
      navigate(URLExistPath.HomePage);
    } catch (error) {
        console.log('error signing out: ', error);
    }
  };

  return (
    <AppBar position="static" color='transparent'>
      <CssBaseline/>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
                className={css(styles.image15)}
                src={require("../../assets/6fc2bb1d52c3f170192b1e6b518914ae.png")}
                alt="alt text"
              />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            REPUBLIQUE DEMOCRATIQUE DU CONGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* in case loggedIn */}
          {<div>
            {isLoggedIn?
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Elie Sharp" src={require("../../assets/ac0405c429c52917ebae5b1e11459baf.png")}/> */}
                <Avatar alt={nom} src="/static/images/avatar/1.jpg"/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={signOut}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            :
            null
            }
            </div>}
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;