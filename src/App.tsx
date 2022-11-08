import * as React from "react";
import UpdateUserForm from "./components/pages/updateUserInfo";
import { Box, Container } from "@mui/material";
import { NationalIDNumber } from "./grpc/pb/message_and_service_pb";
import SignUp from "./components/pages/SignUp";
import { Routes, Route, Link } from "react-router-dom";
import RegisterForm from './components/pages/RegisterForm';

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/updateUserForm">UpdateUserForm</Link>
          </li>
          <li>
            <Link to="/registerForm">RegisterForm</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/registerForm" element={
          <Container maxWidth="sm">
          <Box sx={{ my: 8 }}>
            <RegisterForm
            />
          </Box>
        </Container>
        }></Route>
        <Route
          path="/updateUserForm"
          element={
            <Container maxWidth="sm">
              <Box sx={{ my: 8 }}>
                <UpdateUserForm
                  nationalID={new NationalIDNumber().setId("6035223a0000181")}
                />
              </Box>
            </Container>
          }
        />
      </Routes>
    </>
  );
}
