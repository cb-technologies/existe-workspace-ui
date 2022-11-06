import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as yup from "yup"; // to validate the form input
import { useForm } from "react-hook-form"; // to handle the form's submission and error states
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import {
  AgentSignUpFormInput,
} from "../../utils/exist_form";
import { ExistService } from "../../store/exist_api_call";
import { AgentSignInInfo } from "../../grpc/pb/message_and_service_pb";
import useHistoryState from "../../hooks/useHistoryState";


interface IFormInput {
    email: string;
    password: string;
  }

const schema = yup.object().shape({ //requirement for the inputs
email: yup.string().required("L'email addresse ne peut pas etre vide").email(),
password: yup.string().required("Le mot de passe ne peut pas etre vide").min(8).max(100),
});

const theme = createTheme();

export default function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IFormInput>({
        resolver: yupResolver(schema),
      });

    const [json, setJson] = useState<string>();
    const [Email, setEmail] = useHistoryState("Email", "");
    const [Password, setPassword] = useHistoryState("Password", "");



    const onSubmit = (data: IFormInput) => {
    setJson(JSON.stringify(data));
    const agentSignInInfo: AgentSignInInfo = new AgentSignInInfo()
      .setEmail(data.email)
      .setPassword(data.password);
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PeopleAltIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Exist-Id Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              {...register("email")}
              variant="outlined"
              margin="normal"
              label="Email"
              helperText={errors.email?.message}
              error={!!errors.email?.message}
              fullWidth
              required
            />
            <TextField
              {...register("password")}
              variant="outlined"
              margin="normal"
              label="Mot de Passe"
              helperText={errors.password?.message}
              error={!!errors.password?.message}
              type="password"
              fullWidth
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Se Connecter
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Mot de passe oublié?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Pas encore enregistré? Veuillez vous inscrire"}
                </Link>
              </Grid>
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
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.google.com/">
          Exist
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }