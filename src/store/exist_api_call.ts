import { ExistCRUDClient } from "../grpc/pb/Message_and_serviceServiceClientPb";

export const ExistService = new ExistCRUDClient(
  "http://localhost:4500/",
  null,
  null
);
