import * as React from 'react';
import { CssBaseline} from "@material-ui/core";
import { ExistCRUDClient } from './grpc/pb/Message_and_serviceServiceClientPb';
import { NationalIDNumber, PersonInfoResponse } from './grpc/pb/message_and_service_pb';
import * as grpcWeb from 'grpc-web';
import {CssBaseline} from "@material-ui/core";
import {makeStyles} from "@mui/styles";
import Header from "./components/others/Header";

function Copyright() {
  return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
  );
}

export default function App() {
  var findPersonRequest = new NationalIDNumber().setId("5f805fefd00002e");
  var ExistService = new ExistCRUDClient("http://localhost:4551/", null, null);

  const call = ExistService.findPersonInfo(findPersonRequest, null, (err: grpcWeb.RpcError, response: PersonInfoResponse) => {
    if (err) {
      console.log("Here is the err : ", err)
      return
    }

    console.log("The name of the person is : ", response.getNames()?.getNom());

    call.on('status', (status: grpcWeb.Status) => {
      console.log("status:", status);
    }
    );
  }
  )

  return (
    <div> This file is mainly to show how we can make call to the grpc service. We will probably need to adopt a convention here or find what would be a good practice </div>
    const classes = useStyles();
    return (
      <div className={classes.root}>
          <CssBaseline/>
          <Header/>
      </div>

  );
}