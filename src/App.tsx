import * as React from 'react';
import { CssBaseline} from "@material-ui/core";
import {makeStyles} from "@mui/styles";
import Header from "./components/others/Header";

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}));

export default function App() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
          <CssBaseline/>
          <Header/>
      </div>

  );
}
