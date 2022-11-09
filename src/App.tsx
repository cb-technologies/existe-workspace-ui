import * as React from 'react';
import { ExistCRUDClient } from './grpc/pb/Message_and_serviceServiceClientPb';
import { NationalIDNumber, PersonInfoResponse } from './grpc/pb/message_and_service_pb';
import * as grpcWeb from 'grpc-web';
import UpdateUserForm from './components/pages/updateUserInfo';
import { Box, Container } from '@mui/material';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import MainRouter from './components/pages/MainRouter';


export default function App() {
  return (
    // <Container maxWidth="sm">

      
      <MainRouter />
      // </Box>
    // </Container>
  );
}

// export default function App() {
//   return (
//    <BrowserRouter>
//          <Route path = "/"><SignIn/></Route>
//          <Route path = "/SignUp"><SignUp/></Route>
//    </BrowserRouter>
//   );
// }