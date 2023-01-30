import { createContext } from 'react';

export interface AuthContextState {
  isAuthenticated: boolean;
  wrongCredentials: boolean;
  user: any;
}


export interface AuthContextActions {
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setWrongCredentials: (wrong: boolean) => void;
}

export interface AuthContextProps extends AuthContextState, AuthContextActions {}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  user: null,
  wrongCredentials: false,
  login: async (username: string, password: string) => { },
  logout: async () => { },
  setWrongCredentials: (wrong: boolean) => { }
});