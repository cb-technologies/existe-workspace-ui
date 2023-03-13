import { ExistCRUDClient } from "../grpc/pb/Message_and_serviceServiceClientPb";

export const ExistService = new ExistCRUDClient(
  "https://existeid-go-server.com:4551/",
  null,
  null
);
//"http://localhost:4500/" for testing locally
// "https://existeid-go-server.com:4551/" prod setting