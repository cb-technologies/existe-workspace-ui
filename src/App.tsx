import * as React from 'react';
import UpdateUserForm from './components/pages/updateUserInfo';
import { Box, Container } from '@mui/material';
import { NationalIDNumber } from './grpc/pb/message_and_service_pb';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{my:8}}>
        <UpdateUserForm nationalID={new NationalIDNumber().setId("5ff51101300002e")}/>
      </Box>
    </Container>
  );
}