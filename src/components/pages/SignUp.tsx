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
import "react-toastify/dist/ReactToastify.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { URLExistPath } from "../../constants/existUrlPath";
import { ExistPrompts } from "../../constants/existPrompts";
import { delay } from "./RegisterForm";

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);


const schema = yup.object().shape({
  Email: yup
    .string()
    .required(ExistPrompts.EMPTY("L'addresse email"))
    .email("Addresse email"),
  Password: yup
    .string()
    .required(ExistPrompts.EMPTY("Le mot de passe"))
    .min(8, ExistPrompts.MIN("Le mot de passe", 8))
    .max(30, ExistPrompts.MAX("Le mot de passe", 30)),
  Prenom: yup
    .string()
    .required(ExistPrompts.EMPTY("Le prenom"))
    .min(3, ExistPrompts.MIN("Le prenom", 3))
    .max(50, ExistPrompts.MAX("Le prenom", 50)),
  Nom: yup
    .string()
    .required(ExistPrompts.EMPTY("Le nom"))
    .min(3, ExistPrompts.MIN("Le nom", 3))
    .max(50, ExistPrompts.MAX("Le nom", 50)),
});

const theme = createTheme();


async function signUp(username: string, password:string) {
  try {
      // const email = agentInfo.getEmail()
      // const password = agentInfo.getPassword()
      // const username = agentInfo.getEmail()
      const user  = await Auth.signUp({
          username,
          password,
          attributes: {
              // email,          // optional
             // optional - E.164 number convention
              // other custom attributes 
          },
          autoSignIn: { // optional - enables auto sign in after user is confirmed
              enabled: true,
          }
      });
      // setSpinRegister(false);

      console.log(user);
      if (user.userConfirmed) {
        console.log('Sign-up successful');
        return 1;
      }else {
        console.log('Please check your email to confirm your account');
        return 0;
      }
  } catch (error) {
      console.log('error signing up:', error);
  }
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AgentSignUpFormInput>({
    resolver: yupResolver(schema),
  });

  const [Nom, setNom] = useHistoryState("Nom", "");
  const [Prenom, setPrenom] = useHistoryState("Prenom", "");
  const [Email, setEmail] = useHistoryState<any>("Email", '');
  const [Password, setPassword] = useHistoryState("Password", "");

  React.useEffect(() => {
    reset();
  }, [Nom, Prenom, Email, Password]);

  const [spinRegister, setSpinRegister] = useState(false);
  const navigate = useNavigate();

  const [succcessful, setSuccessful] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);

   const onSubmit = (data: AgentSignUpFormInput) => {
    const agentInfo: AgentInfo = new AgentInfo()
      .setNom(data.Nom)
      .setPrenom(data.Prenom)
      .setEmail(data.Email)
      .setPassword(data.Password);
    setSpinRegister(true);
    try {
      // const result = await signUp(agentInfo.getEmail(), agentInfo.getPassword())
      // setSpinRegister(false);
      // if (result == 1) {
      //   setRegistrationComplete(true);
      //   await delay(1500);
      //   setRegistrationComplete(false);
      //   navigate(URLExistPath.SignInPage);
      // }else {
      //   console.log("could not register user");
      //   setSpinRegister(false);
      //   setSuccessful(!succcessful);
      // }
      const email = agentInfo.getEmail()
      const password = agentInfo.getPassword()
      Auth.signUp({
        username : email,
        password,
        attributes: {
          email,
        },
      })
      .then(async data => {
        setSpinRegister(false);
        console.log('sign up success!', data);
        setRegistrationComplete(true);
        await delay(1500);
        setRegistrationComplete(false);

        // Registering the agent in the backend database
        ExistService.signUpAgent(agentInfo, null)
        // .then(async (value) => {
        //   // setSpinRegister(false);
        //   if (value.getStatus() != 1) {
        //     // setRegistrationComplete(true);
        //     await delay(1500);
        //     // setRegistrationComplete(false);
        //     // navigate(URLExistPath.SignInPage);
        //   } else {
        //     console.log("could not register user");
        //   }
        // })
        .catch((error) => {
          console.log(`try error ${error}`);
          setSpinRegister(false);
          setSuccessful(!succcessful);
        });

        navigate(URLExistPath.ConfirmSignUpPage);
      })
      .catch(err => {
        setSpinRegister(false);
        console.log('error signing up:', err);
        setSuccessful(!succcessful);
      });


      ExistService.signUpAgent(agentInfo, null)
        // .then(async (value) => {
        //   setSpinRegister(false);
        //   if (value.getStatus() == 1) {
        //     setRegistrationComplete(true);
        //     await delay(1500);
        //     setRegistrationComplete(false);
        //     navigate(URLExistPath.SignInPage);
        //   } else {
        //     console.log("could not register user");
        //   }
        // })
        .catch((error) => {
          console.log(`try error ${error}`);
          setSpinRegister(false);
          setSuccessful(!succcessful);
        });
    } catch (error) {
      console.log(`try error ${error}`);
      setSuccessful(!succcessful);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
              helperText={errors.Nom?.message}
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
              helperText={errors.Prenom?.message}
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
              helperText={errors.Email?.message}
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
              helperText={errors.Password?.message}
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
            <Grid item>
              <RouterLink to={URLExistPath.SignInPage}>
                {"Deja enregistré? Connecter vous"}
              </RouterLink>
            </Grid>
            {succcessful && (
              <Alert severity="error">
                <AlertTitle>Erreur!</AlertTitle>
                Votre email est deja en utilisation, veuillez l'utiliser pour
                vous connecter ou choisisez un autre email.
              </Alert>
            )}
            {registrationComplete && (
              <Alert severity="success">
                <AlertTitle>Enregistrement reussit</AlertTitle>
                Enregistrement reussit - <strong>ok!</strong>
              </Alert>
            )}
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
