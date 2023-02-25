import { ExistCRUDClient } from "../grpc/pb/Message_and_serviceServiceClientPb";

export const ExistService = new ExistCRUDClient(
  "https://existeid-go-server.com:4551/",
  null,
  null
);
