import * as React from 'react';
import RegisterForm from "./components/pages/RegisterForm";

import UpdateUserForm from "./components/pages/updateUserInfo";
import { ExistCRUDClient } from './grpc/pb/Message_and_serviceServiceClientPb';
import { NationalIDNumber, PersonInfoResponse } from './grpc/pb/message_and_service_pb';
import * as grpcWeb from 'grpc-web';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';


export default function App() {
  // var findPersonRequest = new NationalIDNumber().setId("5f805fefd00002e");
  var ExistService = new ExistCRUDClient("http://localhost:4551/", null, null);



  //
  // const call = ExistService.findPersonInfo(findPersonRequest, null, (err: grpcWeb.RpcError, response: PersonInfoResponse) => {
  //   if (err) {
  //     console.log("Here is the err : ", err)
  //     return
  //   }
  //
  //   console.log("The name of the person is : ", response.getNames()?.getNom());
  //
  //   call.on('status', (status: grpcWeb.Status) => {
  //     console.log("status:", status);
  //   }
  //   );
  // }
  // )


  return (
      <Container maxWidth="sm">
        <Box sx={{ my: 8 }}>
          <UpdateUserForm></UpdateUserForm>
        </Box>
      </Container>
  );
}