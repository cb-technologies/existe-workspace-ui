<<<<<<< HEAD
import * as React from 'react';
import { ExistCRUDClient } from './grpc/pb/Message_and_serviceServiceClientPb';
import { NationalIDNumber, PersonInfoResponse } from './grpc/pb/message_and_service_pb';
import * as grpcWeb from 'grpc-web';
import UpdateUserForm from './components/pages/updateUserInfo';
import { Box, Container } from '@mui/material';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import MainRouter from './components/pages/MainRouter';


export default function App() {
  return (    
      <MainRouter />
=======
import * as React from "react";
import UpdateUserForm from "./components/pages/updateUserInfo";
import { Box, Button, Container } from "@mui/material";
import { NationalIDNumber } from "./grpc/pb/message_and_service_pb";
import SignUp from "./components/pages/SignUp";
import { Routes, Route, Link } from "react-router-dom";
import CardGenerationPage from "./components/pages/CardGenerationPage";
import Pricing from "./components/pages/OrientationPage";
import SignIn from "./components/pages/Login";

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
            <Link to="/carteGen">GenerateCard</Link>
          </li>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/carteGen" element={<CardGenerationPage />}></Route>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/welcome" element={<Pricing/>} />
        <Route path="/signIn" element={<SignIn />} />
        <Route
          path="/updateUserForm"
          element={
            <Container maxWidth="sm">
              <Box sx={{ my: 8 }}>
                <UpdateUserForm
                  nationalID={new NationalIDNumber().setId("5ff51101300002e")}
                />
              </Box>
            </Container>
          }
        />
      </Routes>
    </>
>>>>>>> dc7dba1 (Pushing for Elie)
  );
}
