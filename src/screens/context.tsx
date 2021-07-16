import React from 'react';

type userFound = null | {
  username: string;
  password: string;
  token: string;
  id: number;
};

export const AuthContext = React.createContext<{
  userFound: userFound;
  signIn: () => void;
  SignOut: () => void;
}>({
  userFound: null,
  signIn: () => {},
  SignOut: () => {},
});
