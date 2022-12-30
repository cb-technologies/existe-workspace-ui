import { ExistCRUDClient } from "../grpc/pb/Message_and_serviceServiceClientPb";



export const ExistService = new ExistCRUDClient("http://localhost:4551/", null, null);
