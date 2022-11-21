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
import { ExistPrompts } from "../../constants/existPrompts";

interface SignInInput {
  Email: string;
  Password: string;
}

const schema = yup.object().shape({
  Email: yup
    .string()
    .required(ExistPrompts.EMPTY("L'addresse email"))
    .email(ExistPrompts.INVALID("Addresse email")),
  Password: yup
    .string()
    .required(ExistPrompts.EMPTY("Le mot de passe"))
    .min(8, ExistPrompts.MIN("Le mot de passe", 8))
    .max(30,ExistPrompts.MAX("Le mot de passe", 30)),
});

const theme = createTheme();

export default function SignIn() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: yupResolver(schema),
  });

  const [Email, setEmail] = useHistoryState("Email", "");
  const [Password, setPassword] = useHistoryState("Password", "");

  const [spinRegister, setSpinRegister] = useState(false);
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
          setSpinRegister(false);
          setError("Email", {message:ExistPrompts.WRONG_EMAIL_OR_PASSWORD})
          setError("Password", {message:ExistPrompts.WRONG_EMAIL_OR_PASSWORD})
        });
    } catch (error) {
      setSpinRegister(true);
      setError("Email", {message:ExistPrompts.WRONG_EMAIL_OR_PASSWORD})
      setError("Password", {message:ExistPrompts.WRONG_EMAIL_OR_PASSWORD})
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
              helperText={errors.Email?.message}
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
              helperText={errors.Password?.message}
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
              <RouterLink to={URLExistPath.UndefinedPage}>
                Mot de passe oublié?
              </RouterLink>
              <RouterLink to={URLExistPath.SignUpPage}>
                {"Pas encore enregistré? Enregistrer vous"}
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