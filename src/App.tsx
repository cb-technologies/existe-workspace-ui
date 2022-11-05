import * as React from 'react';
import { ExistCRUDClient } from './grpc/pb/Message_and_serviceServiceClientPb';
import { NationalIDNumber, PersonInfoResponse } from './grpc/pb/message_and_service_pb';
import * as grpcWeb from 'grpc-web';
import SignUp from './components/pages/SignUp';

export default function App() {
  return (
    <SignUp />
  );
}