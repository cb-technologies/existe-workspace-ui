import { PersonInfoResponse } from "../grpc/pb/message_and_service_pb"

export function rebuildBase64Image(userInfo : PersonInfoResponse.AsObject) {
    if (userInfo) {
        return userInfo.biometrics?.photoType! + "," + userInfo.biometrics?.photos!
    }else {
        return ""
    }
    
}