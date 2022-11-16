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
import { Link as RouterLink } from "react-router-dom"; //import the package
import { ExistService } from "../../store/exist_api_call";
import { AgentSignInInfo } from "../../grpc/pb/message_and_service_pb";
import useHistoryState from "../../hooks/useHistoryState";
import { Stack } from "@mui/system";

interface SignInInput {
  Email: string;
  Password: string;
}

const schema = yup.object().shape({
  //requirement for the inputs
  email: yup
    .string()
    .required("L'email addresse ne peut pas etre vide")
    .email(),
  password: yup
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

  const onSubmit = (data: SignInInput) => {
    const agentSignInInfo: AgentSignInInfo = new AgentSignInInfo()
      .setEmail(data.Email)
      .setPassword(data.Password);
    ExistService.signInAgent(agentSignInInfo, null).then((value) => {
      console.log("The respone was ", value);
    });
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <RouterLink to="/orientation">{"Se connecter"}</RouterLink>
            </Button>
            <Stack>
              <RouterLink to="/notdefined">Mot de passe oublié?</RouterLink>
              <RouterLink to="/signUp">
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
      <Link color="inherit" href="https://www.google.com/">
        Exist
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
