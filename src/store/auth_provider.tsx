import React, { useEffect, useState } from "react";
import {
  AuthContext,
  AuthContextState,
} from "./auth_context";

export default function AuthProvider(props: any) {
  const [authState, setAuthState] = useState<AuthContextState>({
    isAuthenticated: null,
    user: null,
  });

  function setIsAuthenticatedAndUser(isAuthenticated: boolean, user: any) {
    setAuthState({isAuthenticated: isAuthenticated, user: user});
  }


  return (
    <AuthContext.Provider value={{ ...authState, setIsAuthenticatedAndUser}}>
      {props.children}
    </AuthContext.Provider>
  );
}
