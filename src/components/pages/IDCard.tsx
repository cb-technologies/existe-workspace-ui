import React from "react";
import { Container, Box, Button } from "@mui/material";
import { Link, useLocation} from "react-router-dom";
import CardBack from "./CardBack";
import { PersonInfoResponse } from "../../grpc/pb/message_and_service_pb";
import CardFront from "./CardFront";
import { URLExistPath } from "../../constants/existUrlPath";

export default function IDCard() {
  const location = useLocation();
  const userInfo = location.state.cardInfo as PersonInfoResponse.AsObject;

  return (
    <Container maxWidth="lg">
      <Container maxWidth="lg">
        <Box sx={{ my: 8, width: "80%", boxShadow: 15, borderRadius: 3 }}>
          <CardFront userInfo={userInfo} />
        </Box>
      </Container>
      <Box sx={{ my: 8, width: "80%", boxShadow: 15, borderRadius: 3 }}>
        <CardBack userInfo={userInfo} />
      </Box>
    </Container>
  );
}
