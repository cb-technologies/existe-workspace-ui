import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useEffect, useState } from "react";
import { Auth } from 'aws-amplify';

import {
  useNavigate,
} from "react-router-dom"; //import the package
import { URLExistPath } from "../../constants/existUrlPath";
import { AuthContext } from "../../store/auth_context";
import { Alert, AlertTitle } from "@mui/material";

const tiers = [
  {
    buttonText: "Enregistrer Un Citoyen",
    buttonVariant: "outlined",
    icon: AppRegistrationIcon,
    page: URLExistPath.RegisterPage,
    flag: "to_register",
  },
  {
    buttonText: "Actualiser Un Citoyen",
    buttonVariant: "outlined",
    icon: BrowserUpdatedIcon,
    page: URLExistPath.RetrieveUserInfo,
    flag: "to_update",
  },
  {
    buttonText: "Generer carte d'identitée",
    buttonVariant: "outlined",
    icon: PermIdentityIcon,
    page: URLExistPath.RetrieveUserInfo,
    flag: "to_generate",
  },
  {
    buttonText: "Gerer Agents",
    buttonVariant: "outlined",
    icon: ManageAccountsIcon,
    page: URLExistPath.AgentListPage,
    flag: "to_agent_list",
  },
];

function PrivateComponent() {
  return (
    <div>
      This is a private component
    </div>
  );
}


function OrientationContent() {
  const navigate = useNavigate();

  const navigateTo = (page: string, flag: string) => {
    navigate(page,{ state: { flag_to_page: flag } });
  };

  const authContext = React.useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(authContext.isAuthenticated);
  const [user, setUser] = useState(authContext.user);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')!);
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
      authContext.setIsAuthenticatedAndUser(true, storedUser);
      console.log("Testing Debugging");
    }
  }, []);


  if (isLoggedIn) {
    return (
        <React.Fragment>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0}></AppBar>
  
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 8, pb: 6 }}
        >
          <Typography
            variant="h3"
            align="center"
            color="text.secondary"
            component="p"
          >
            Bienvenue sur le site officiel d'identificantion en RDC
          </Typography>
        </Container>
        <Container disableGutters maxWidth="md" component="main">
          <Grid container alignItems="center" justifyContent={"center"}>
            {tiers.map((tier, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  padding: 1.5,
                }}
                key={index}
              >
                <Card
                  sx={{
                    bgcolor: "#d3d3d3",
                  }}
                  onClick={() => {navigateTo(tier.page, tier.flag); console.log(tier.page, tier.flag)}}
                >
                  <CardHeader />
                  <CardContent
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <ul>
                      <tier.icon
                        style={{ fontSize: 100, alignItems: "center" }}
                      />
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      sx={{
                        "&.MuiButton-text": { color: "#1E0909" },
                      }}
                      value={tier.page}
                      onClick={() => {navigateTo(tier.page, tier.flag); console.log(tier.page, tier.flag)}}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }else{
    return(
      <div>
      <Alert severity="error">
                <AlertTitle>Accès refusé</AlertTitle>
                "Désolé, vous n'êtes pas autorisé à accéder à cette page" — <strong>Accès refusé</strong>
          </Alert>
    </div>
    );
  }
  
}
export default function Orientation() {

  // function retreiveUser(flag_to_page): string {
  //   var flag_to_send  = tier.flag;
  //   ExistService.retreiveUserBasedOnField(
  //     retreivePersonInfoParameters,
  //     null
  //   ).then((userInfo) => {
  //       const userInfoObject = userInfo.toObject()
  //     navigate(URLExistPath.GeneratedCardPage, { state: { cardInfo: userInfoObject } });
  //   });
  // }

  return <OrientationContent />;
}
