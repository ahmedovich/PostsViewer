import React from 'react';

type userFound = null | {username: string; password: string};

export const AuthContext = React.createContext<{
  userFound: userFound;
  signIn: () => void;
  SignOut: () => void;
}>({
  userFound: null,
  signIn: () => {},
  SignOut: () => {},
});
