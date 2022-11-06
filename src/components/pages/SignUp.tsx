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
import {
  AgentSignUpFormInput,
} from "../../utils/exist_form";
import { ExistService } from "../../store/exist_api_call";
import { AgentInfo } from "../../grpc/pb/message_and_service_pb";
import useHistoryState from "../../hooks/useHistoryState";

const schema = yup.object().shape({
  //requirement for the inputs
  Email: yup.string().required().email(),
  Password: yup.string().required().min(8).max(100),
  Prenom: yup.string().required().min(5).max(100),
  Nom: yup.string().required().min(5).max(100),
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

  const onSubmit = (data: AgentSignUpFormInput) => {
    const agentInfo: AgentInfo = new AgentInfo()
      .setNom(data.Nom)
      .setPrenom(data.Prenom)
      .setEmail(data.Email)
      .setPassword(data.Password);
    ExistService.signUpAgent(agentInfo, null).then((value) => {
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              S'enregister
            </Button>
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
