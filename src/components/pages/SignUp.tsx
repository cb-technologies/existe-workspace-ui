import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as yup from "yup"; // to validate the form input
import { useForm } from "react-hook-form"; // to handle the form's submission and error states
import { yupResolver } from "@hookform/resolvers/yup";
import { AgentSignUpFormInput } from "../../utils/exist_form";
import { ExistService } from "../../store/exist_api_call";
import { AgentInfo } from "../../grpc/pb/message_and_service_pb";
import useHistoryState from "../../hooks/useHistoryState";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { Link as RouterLink } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { URLExistPath } from "../../constants/existUrlPath";


const schema = yup.object().shape({
  //requirement for the inputs
  Email: yup.string().required().email(),
  Password: yup.string().required().min(8).max(100),
  Prenom: yup.string().required().min(3).max(100),
  Nom: yup.string().required().min(3).max(100),
});

const theme = createTheme();

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AgentSignUpFormInput>({
    resolver: yupResolver(schema),
  });



  const [Nom, setNom] = useHistoryState("Nom", "");
  const [Prenom, setPrenom] = useHistoryState("Prenom", "");
  const [Email, setEmail] = useHistoryState("Email", "");
  const [Password, setPassword] = useHistoryState("Password", "");

  const [spinRegister, setSpinRegister] = useState(false);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);


  const onSubmit = (data: AgentSignUpFormInput) => {
    const agentInfo: AgentInfo = new AgentInfo()
      .setNom(data.Nom)
      .setPrenom(data.Prenom)
      .setEmail(data.Email)
      .setPassword(data.Password);
    setSpinRegister(true);
    try {
      ExistService.signUpAgent(agentInfo, null).then((value) => {
        setSpinRegister(false);
        if (value.getStatus() == 1) {
          navigate(URLExistPath.HomePage);
        } else {
          console.log("could not register user");
        }
      }).catch ((error) => {
        console.log(`try error ${error}`)
        setSpinRegister(false);
        setOpen(!open);
        console.log(open)
      });
    } catch (error) {
      // setSpinRegister(false);
      console.log(`try error ${error}`)
      setOpen(!open);
      console.log(open)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {open ? (
              <Alert
                status='error'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
              >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                  Erreur!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                  Votre email est deja en utilisation, veuillez l'utiliser pour vous connecter ou choisisez un autre email.
                </AlertDescription>
              </Alert>
            ):('')}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <PeopleAltIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Exist-Id Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              {...register("Nom")}
              variant="outlined"
              margin="normal"
              type="text"
              label={"Nom"}
              value={Nom}
              onChange={(e) => setNom(e.target.value)}
              helperText={!!errors["Nom"] ? `Incorrect Nom` : ""}
              error={!!errors["Nom"]}
              required
              fullWidth
            />
            <TextField
              {...register("Prenom")}
              variant="outlined"
              margin="normal"
              type="text"
              label={"Prenom"}
              value={Prenom}
              onChange={(e) => setPrenom(e.target.value)}
              helperText={!!errors["Prenom"] ? `Incorrect Prenom` : ""}
              error={!!errors["Prenom"]}
              required
              fullWidth
            />
            <TextField
              {...register("Email")}
              variant="outlined"
              margin="normal"
              type="text"
              label={"Email"}
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              helperText={!!errors["Email"] ? `Incorrect Email` : ""}
              error={!!errors["Email"]}
              required
              fullWidth
            />
            <TextField
              {...register("Password")}
              variant="outlined"
              margin="normal"
              type="password"
              label={"Password"}
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              helperText={!!errors["Password"] ? `Incorrect Password` : ""}
              error={!!errors["Password"]}
              required
              fullWidth
            />
            {!spinRegister ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                S'enregister
              </Button>
            ) : (
              <LoadingButton
                loading
                fullWidth
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                  S'enregister
              </LoadingButton>
            )}
            {/* <Dialog open={open} >
              <Alert

                //props go here
              >
                The "Close" button does not work.
              </Alert>
            </Dialog> */}

            <Grid item>
              <RouterLink to="/">
              {"Deja enregistré? Connecter vous"}
              </RouterLink>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.google.com/">
        Exist
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}