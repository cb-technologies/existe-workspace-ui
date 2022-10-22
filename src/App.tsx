import * as React from 'react';
import { useState } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as yup from "yup"; // to validate the form input
import { useForm } from "react-hook-form"; // to handle the form's submission and error states
import Link from '@mui/material/Link';
import { yupResolver } from "@hookform/resolvers/yup";
import ProTip from './ProTip';
import {
  makeStyles,TextField,Button
} from "@material-ui/core"; // for user interface



const useStyles = makeStyles((theme) => ({ // Material UI to create CSS classes and rules
  submitButton: {
    marginTop: theme.spacing(4),
  },
  heading: {
    textAlign: "center",
    margin: theme.spacing(1, 0, 4),
  },
}));

interface IFormInput {
  Prenom: string;
  Nom: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({ //requirement for the inputs
  email: yup.string().required().email(),
  Prenom: yup.string().required().min(2).max(15),
  Nom: yup.string().required().min(2).max(15),
  password: yup.string().required().min(8).max(100),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const { heading, submitButton } = useStyles();

  const [json, setJson] = useState<string>();

  const onSubmit = (data: IFormInput) => {
    setJson(JSON.stringify(data));
  };

  return (
    <Container maxWidth="xs">
      <Typography className={heading} variant="h3">
        Exist-Id Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          {...register("Nom")}
          variant="outlined"
          margin="normal"
          label="Nom"
          helperText={errors.Nom?.message}
          error={!!errors.Nom?.message}
          fullWidth
        />
        <TextField
          {...register("Prenom")}
          variant="outlined"
          margin="normal"
          label="Prenom"
          helperText={errors.Prenom?.message}
          error={!!errors.Prenom?.message}
          fullWidth
        />
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
          color="primary"
          className={submitButton}
        >
          Login
        </Button>
        {json && (
          <>
            <Typography variant="body1">
              Disregard this json file. We will implement some grpc entities
            </Typography>
            <Typography variant="body2">{json}</Typography>
          </>
        )}
      </form>
    </Container>
  );
}

export default App;