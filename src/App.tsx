import {
  makeStyles,
  Container,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    margin: theme.spacing(1, 0, 4),
  },
  submitButton: {
    marginTop: theme.spacing(4),
  },
}));

function App() {
  const { heading, submitButton } = useStyles();

  const [json, setJson] = useState<string>();

  return (
      <Container maxWidth="xs">
        <Typography className={heading} variant="h3">
          Sign Up Form
        </Typography>
        <form>
          <TextField
              variant="outlined"
              margin="normal"
              label="Email"
              fullWidth
              required
          />
          <TextField
              variant="outlined"
              margin="normal"
              label="First Name"
              fullWidth
              required
          />
          <TextField
              variant="outlined"
              margin="normal"
              label="Password"
              type="password"
              fullWidth
              required
          />
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={submitButton}
          >
            Sign Up
          </Button>
          {json && (
              <>
                <Typography variant="body1">
                  Below is the JSON that would normally get passed to the server
                  when a form gets submitted
                </Typography>
                <Typography variant="body2">{json}</Typography>
              </>
          )}
        </form>
      </Container>
  );
}

export default App;