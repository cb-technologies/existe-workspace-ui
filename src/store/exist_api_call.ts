import { ExistCRUDClient } from "../grpc/pb/Message_and_serviceServiceClientPb";



export const ExistService = new ExistCRUDClient("http://127.0.0.1:4500/", null, null);