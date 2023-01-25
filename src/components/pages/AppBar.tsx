import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styles from "../styles/carteGenerationStyle";
import {css} from "aphrodite/no-important";
import {Auth} from 'aws-amplify';
import {useNavigate} from "react-router-dom";

const pages = [''];
const settings = ['Profile', 'Orientation', 'Déconnexion'];
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

    const signOut = async () => {
        // setAnchorElUser(null);
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    };

    let navigate = useNavigate();

    const profilePage = () => {
        let path = `/userProfilePage`;
        navigate(path);
    }

    const userInfos = () => {
        return Auth.currentUserCredentials();
    }


    return (
        <AppBar position="static" sx={{color: 'primary.main'}}>
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
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#FAFAFA',
                            textDecoration: 'none',
                        }}
                    >
                        REPUBLIQUE DEMOCRATIQUE DU CONGO
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="A">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                {/* <Avatar alt="Elie Sharp" src={require("../../assets/ac0405c429c52917ebae5b1e11459baf.png")}/> */}
                                <Avatar alt="Elie Sharp" src="/static/images/avatar/1.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
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
                                <MenuItem value={setting} key={setting} onClick={() => profilePage()}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;