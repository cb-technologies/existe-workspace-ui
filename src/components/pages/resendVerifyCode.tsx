import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SecurityIcon from '@mui/icons-material/Security';
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
import { Auth } from 'aws-amplify';
import { AgentInfo } from "../../grpc/pb/message_and_service_pb";

interface ResendInput {
  UserName: string;
}

const schema = yup.object().shape({
  UserName: yup
    .string()
    .required(ExistPrompts.EMPTY("L'addresse email"))
    .email(ExistPrompts.INVALID("Addresse email")),
});

const theme = createTheme();

// async function signIn(agentInfo : AgentSignInInfo) {
//   try {
//       const username = agentInfo.getEmail()
//       const password = agentInfo.getPassword()
//       const user = await Auth.signIn(username, password);
//   } catch (error) {
//       console.log('error signing in', error);
//   }
// }

export default function ResendCode() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ResendInput>({
    resolver: yupResolver(schema),
  });

  const [UserName, SetUserName] = useHistoryState("UserName", "");
  const [Code, setCode] = useHistoryState("Code", "");

  const [spinRegister, setSpinRegister] = useState(false);
  const navigate = useNavigate();

  
//   const onSubmit = async (data: VerificationInput) => {
//     const username = data.UserName
//     const code = data.Code
//     console.log('Arriving');
//     try {
//         Auth.confirmSignUp(username, code)
//         .then(data => {
//             if (data) {
//                 navigate(URLExistPath.SignInPage);
//             } else {
//                 console.log('Confirm sign up was not successful');
//             }
//         })
//         .catch(err => {
//             console.log('error resending code: ', err);
//         });
//     } catch (error) {
//         console.log('error confirming sign up', error);
//     }
//   };
  const onSubmit = async (data: ResendInput) => {
    const username = data.UserName
    console.log('Arriving');
    try {
        Auth.resendSignUp(username)
        .then(data => {
            if (data) {
                navigate(URLExistPath.ConfirmSignUpPage);
            } else {
                console.log('error resending code');
            }
        })
        .catch(err => {
            console.log('error resending code: ', err);
        });
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
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
            <SecurityIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Verifier Email
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              {...register("UserName")}
              variant="outlined"
              margin="normal"
              label="Email"
              type="text"
              value={UserName}
              onChange={(e) => SetUserName(e.target.value)}
              helperText={errors.UserName?.message}
              error={!!errors["UserName"]}
              fullWidth
              required
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Renvoyer Code
              </Button>
            {/* <Button
                type="submit"
                fullWidth
                onSubmit={handleSubmit(resendSubmit)}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Resend Code
            </Button> */}
            {/* {!spinRegister ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Verifier Code
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
            )} */}
            {/* <Stack>
              <RouterLink to={URLExistPath.UndefinedPage}>
                Mot de passe oublié?
              </RouterLink>
              <RouterLink to={URLExistPath.SignUpPage}>
                {"Pas encore enregistré? Enregistrer vous"}
              </RouterLink>
            </Stack> */}
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