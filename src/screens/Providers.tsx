import React from 'react';
import {Routes} from './Routes';
import {AuthContext} from './context';

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthContext.Provider value={AuthContext}>
      <Routes />
    </AuthContext.Provider>
  );
};
