import { createContext } from 'react';

export interface AuthContextState {
  isAuthenticated: boolean;
  user: object | null;
}


export interface AuthContextActions {
  setIsAuthenticatedAndUser: (isAuthenticated: boolean, user: object | null) => void;
}

export interface AuthContextProps extends AuthContextState, AuthContextActions {}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  user: null,
  setIsAuthenticatedAndUser: () => {},
});