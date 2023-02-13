import { ExistCRUDClient } from "../grpc/pb/Message_and_serviceServiceClientPb";

export const ExistService = new ExistCRUDClient(
  "https://52.70.141.185:4551/",
  null,
  null
);
