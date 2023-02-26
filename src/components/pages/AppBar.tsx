import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import styles from "../styles/carteGenerationStyle";
import { useNavigate } from "react-router-dom";
import { URLExistPath } from "../../constants/existUrlPath";
import { AuthContext } from "../../store/auth_context";
import { Auth } from "aws-amplify";
import { css } from "aphrodite/no-important";
import { useEffect, useState } from "react";
import { ExistService } from "../../store/exist_api_call";
import { NationalIDNumber, PersonInfoResponse } from "../../grpc/pb/message_and_service_pb";
import { rebuildBase64Image } from "../../constants/generalFunctions";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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
  const pages = [""];

  const authContext = React.useContext(AuthContext);

  const [nationalID] = useState(authContext.user?.attributes["custom:nationalid"]);

  const [nom] = useState(authContext.user?.attributes['custom:nom']);

  const [m_userInfo, setUserInfo] = React.useState<any>() ;
  
  useEffect(() => {

    var db_nationalid = new NationalIDNumber().setId(nationalID)

    ExistService.findPersonInfo(
      db_nationalid,
      null
    ).then((userInfo) => {
      const userInfoObject = userInfo.toObject() as PersonInfoResponse.AsObject;
      console.log(userInfoObject)
      setUserInfo(userInfoObject)
    }).catch((error) => {
      console.log("Double Petage", error);
    });
  }, [authContext.isAuthenticated]);


  const signOut = async () => {
    try {
      await Auth.signOut();
      authContext.setIsAuthenticatedAndUser(false, null);
      localStorage.clear();
      navigate(URLExistPath.HomePage);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  


  const settingsTest = [
    {
      title: "Se Deconnecter",
      fn: signOut,
    },
    {
      title: "Page d'Orientation",
      fn: () => {
        navigate(URLExistPath.OrientationPage);
      },
    },
    {
      title: "Enregistrer Un Citoyen",
      fn: () => {
        navigate(URLExistPath.RegisterPage);
      },
    },
  ];

  return (
    <AppBar position="static" color="transparent">
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
            sx={
              {
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 600,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }
            }
          >
            RÉPUBLIQUE DEMOCRATIQUE DU CONGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {
            <div>
              {authContext.isAuthenticated ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title={nom}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar src={rebuildBase64Image(m_userInfo)} />

                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settingsTest.map((setting) => (
                      <MenuItem key={setting.title} onClick={setting.fn}>
                        <Typography textAlign="center">
                          {setting.title}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : null}
            </div>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
