import * as React from 'react';
import { ExistCRUDClient } from './grpc/pb/Message_and_serviceServiceClientPb';
import { NationalIDNumber, PersonInfoResponse } from './grpc/pb/message_and_service_pb';
import * as grpcWeb from 'grpc-web';
import SignUp from './components/pages/SignUp';
import UpdateUserForm from './components/pages/updateUserInfo';
import { Box, Container } from '@mui/material';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{my:8}}>
        <UpdateUserForm />
      </Box>
    </Container>
  );
}