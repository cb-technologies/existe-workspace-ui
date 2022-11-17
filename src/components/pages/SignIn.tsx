import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as yup from "yup"; // to validate the form input
import { useForm } from "react-hook-form"; // to handle the form's submission and error states
import { yupResolver } from "@hookform/resolvers/yup";
import { Link as RouterLink, useNavigate } from "react-router-dom"; //import the package
import { ExistService } from "../../store/exist_api_call";
import { AgentSignInInfo } from "../../grpc/pb/message_and_service_pb";
import useHistoryState from "../../hooks/useHistoryState";
import { Stack } from "@mui/system";
import { useState } from "react";
import { URLExistPath } from "../../constants/existUrlPath";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { red } from "@mui/material/colors";

interface SignInInput {
  Email: string;
  Password: string;
}

const schema = yup.object().shape({
  Email: yup
    .string()
    .required("L'email addresse ne peut pas etre vide")
    .email(),
  Password: yup
    .string()
    .required("Le mot de passe ne peut pas etre vide")
    .min(8)
    .max(100),
});

const theme = createTheme();

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: yupResolver(schema),
  });

  const [Email, setEmail] = useHistoryState("Email", "");
  const [Password, setPassword] = useHistoryState("Password", "");

  const [spinRegister, setSpinRegister] = useState(false);
  const [errorSignIn, setErrorSignIn] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data: SignInInput) => {
    const agentSignInInfo: AgentSignInInfo = new AgentSignInInfo()
      .setEmail(data.Email)
      .setPassword(data.Password);
    setSpinRegister(true);
    try {
      ExistService.signInAgent(agentSignInInfo, null)
        .then((value) => {
          setSpinRegister(false);
          if (value.getStatus() === 1) {
            navigate(URLExistPath.OrientationPage);
          }
        })
        .catch(() => {
          setErrorSignIn(true);
          setSpinRegister(false);
        });
    } catch (error) {
      setErrorSignIn(true);
      setSpinRegister(true);
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
            Exist-Id Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              {...register("Email")}
              variant="outlined"
              margin="normal"
              label="Email"
              type="text"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              helperText={!!errors["Email"] ? `Incorrect Email` : ""}
              error={!!errors["Email"]}
              fullWidth
              required
            />
            <TextField
              {...register("Password")}
              variant="outlined"
              margin="normal"
              label="Mot de Passe"
              value={Password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              helperText={!!errors["Password"] ? `Incorrect Password` : ""}
              error={!!errors["Password"]}
              fullWidth
            />
            {!spinRegister ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Se Connecter
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
                Se connecter
              </LoadingButton>
            )}
            <Stack>
              {errorSignIn ? (
                <Typography variant="body1" color={red}>
                  Incorrect Mot de Passe ou Email
                </Typography>
              ) : null}
              <RouterLink to={URLExistPath.UndefinedPage}>
                Mot de passe oublié?
              </RouterLink>
              <RouterLink to={URLExistPath.SignUpPage}>
                {"Pas encore enregistré? Veuillez vous inscrire"}
              </RouterLink>
            </Stack>
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
      <Link color="inherit" href="/NotDefinedYet">
        Exist
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
