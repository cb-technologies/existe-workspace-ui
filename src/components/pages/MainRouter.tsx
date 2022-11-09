import React from 'react'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"; //import the package
import SignIn from "./SignIn" //import your signIn page
import SignUp from "./SignUp" //import your signUp page

function MainRouter(){
    return(
        <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
       </Routes>
    );
}
export default MainRouter