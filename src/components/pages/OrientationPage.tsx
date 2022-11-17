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
import {
  useNavigate,
} from "react-router-dom"; //import the package
import { URLExistPath } from "../../constants/existUrlPath";

const tiers = [
  {
    buttonText: "Enregistrer Un Citoyen",
    buttonVariant: "outlined",
    icon: AppRegistrationIcon,
    page: URLExistPath.RegisterPage,
  },
  {
    buttonText: "Actualiser Un Citoyen",
    buttonVariant: "outlined",
    icon: BrowserUpdatedIcon,
    page: URLExistPath.GeneratedCardPage,
  },
  {
    buttonText: "Generer carte d'identitée",
    buttonVariant: "outlined",
    icon: PermIdentityIcon,
    page: URLExistPath.GeneratedCardPage,
  },
];


function OrientationContent() {
  const navigate = useNavigate();

  const navigateTo = (page: string) => {
    navigate(page);
  };
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
                    onClick={() => navigateTo(tier.page)}
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
}
export default function Orientation() {
  return <OrientationContent />;
}
