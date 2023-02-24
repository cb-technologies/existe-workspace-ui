import { ExistCRUDClient } from "../grpc/pb/Message_and_serviceServiceClientPb";

export const ExistService = new ExistCRUDClient(
  "https://34.194.131.22:4551/",
  null,
  null
);
