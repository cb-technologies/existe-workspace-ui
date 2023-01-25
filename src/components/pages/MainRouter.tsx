import React from "react";
import {Route, Routes} from "react-router-dom"; //import the package
import RegisterForm from "./RegisterForm";
import SignUp from "./SignUp";
import Orientation from "./OrientationPage";
import UpdateUserForm from "./updateUserInfo";
import {URLExistPath} from "../../constants/existUrlPath";
import LandingPage from "./LandingPage";
import SignIn from "./SignIn";
import RetrieveUserInfo from "./RetrieveUserInfo";
import IDCard from "./IDCard";
import VerifyCode from "./confirmSignUp";
import ResendCode from "./resendVerifyCode";
import UserProfilePage from "./UserProfilePage";


function MainRouter() {
    return (
        <Routes>
            <Route path={URLExistPath.HomePage} element={<LandingPage/>}/>
            <Route path={URLExistPath.SignInPage} element={<SignIn/>}/>
            <Route path={URLExistPath.SignUpPage} element={<SignUp/>}/>
            <Route path={URLExistPath.UserProfilePage} element={<UserProfilePage/>}/>
            <Route path={URLExistPath.RegisterPage} element={<RegisterForm/>}/>
            <Route path={URLExistPath.ConfirmSignUpPage} element={<VerifyCode/>}/>
            <Route path={URLExistPath.ResendCodePage} element={<ResendCode/>}/>
            <Route path={URLExistPath.GeneratedCardPage} element={<IDCard/>}/>
            <Route path={URLExistPath.RetrieveUserInfo} element={<RetrieveUserInfo/>}/>
            <Route path={URLExistPath.OrientationPage} element={<Orientation/>}/>
            <Route path={URLExistPath.UpdateUserInfoForm} element={<UpdateUserForm/>}/>
            <Route
                path={URLExistPath.UndefinedPage}
                element={<React.Fragment>This page is not defined yet</React.Fragment>}
            />
        </Routes>
    );
}

export default MainRouter;
