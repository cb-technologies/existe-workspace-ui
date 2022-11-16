import React from "react";
import { Route, Routes } from "react-router-dom"; //import the package
import CardGenerationPage from "./CardGenerationPage";
import RegisterForm from "./RegisterForm";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Orientation from "./OrientationPage";
import UpdateUserForm from "./updateUserInfo";
import { URLExistPath } from "../../constants/existUrlPath";

function MainRouter() {
  return (
    <Routes>
      <Route path={URLExistPath.HomePage} element={<SignIn />} />
      <Route path={URLExistPath.SignUpPage} element={<SignUp />} />
      <Route path={URLExistPath.RegisterPage} element={<RegisterForm />} />
      <Route
        path={URLExistPath.GeneratedCardPage}
        element={<CardGenerationPage />}
      />
      <Route path={URLExistPath.OrientationPage} element={<Orientation />} />
      <Route
        path={URLExistPath.UndefinedPage}
        element={<React.Fragment>This page is not defined yet</React.Fragment>}
      />
    </Routes>
  );
}
export default MainRouter;
