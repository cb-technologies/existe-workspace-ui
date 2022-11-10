import * as React from 'react';
import * as grpcWeb from 'grpc-web';

import { ExistCRUDClient } from './services/grpc/pb/Message_and_serviceServiceClientPb';
import { NationalIDNumber, PersonInfoResponse } from './services/grpc/pb/message_and_service_pb';

import LandingPage from "./components/pages/Landing";

export default function App() {
    const findPersonRequest = new NationalIDNumber().setId("5f805fefd00002e");
    const ExistService = new ExistCRUDClient("http://localhost:4551/", null, null);

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
    });

    return (
      <div >
          <LandingPage></LandingPage>
      </div>
  );
}