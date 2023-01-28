import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URLExistPath } from "../constants/existUrlPath";
import {
  AuthContext,
  AuthContextState,
} from "./auth_context";

export default function AuthProvider(props: any) {

  const navigate = useNavigate();

  const [authState, setAuthState] = useState<AuthContextState>({
    isAuthenticated: false,
    user: null,
    wrongCredentials: false,
  });

  async function login(username: string, password: string) {
    try {
      const user = await Auth.signIn(username, password);
      setAuthState({ isAuthenticated: true, wrongCredentials: false, user });
      navigate(URLExistPath.OrientationPage);
    } catch (error) {
      setAuthState({ ...authState, wrongCredentials: true });
      console.log("error signing in", error);
    }
  }

  async function logout() {
    try {
      await Auth.signOut();
      setAuthState({ isAuthenticated: false, user: null, wrongCredentials: false });
      navigate(URLExistPath.HomePage); 
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }


  function setWrongCredentials(value: boolean) {
    setAuthState({ ...authState, wrongCredentials: value });
  }

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, setWrongCredentials}}>
      {props.children}
    </AuthContext.Provider>
  );
}
