import { createContext } from 'react';

export interface AuthContextState {
  isAuthenticated: boolean | null;
  user: any;
}


export interface AuthContextActions {
  setIsAuthenticatedAndUser: (isAuthenticated: boolean, user: object | null) => void;
}

export interface AuthContextProps extends AuthContextState, AuthContextActions {}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: null,
  user: null,
  setIsAuthenticatedAndUser: () => {},
});