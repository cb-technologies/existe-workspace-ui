import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"; //import the package
import CardGenerationPage from "./CardGenerationPage";
import RegisterForm from "./RegisterForm";
import SignIn from "./SignIn"; //import your signIn page
import SignUp from "./SignUp"; //import your signUp page
import UpdateUserForm from "./updateUserInfo";
import RetrieveUserInfo from "./RetrieveUserInfo";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/generateCard" element={<CardGenerationPage />} />
      <Route path="/retrieveUserInfo" element={<RetrieveUserInfo />} />
    </Routes>
  );
}
export default MainRouter;
