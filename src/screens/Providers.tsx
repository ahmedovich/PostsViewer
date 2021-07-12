import React from 'react';
import {AuthProvider} from './AuthProvider';
import {Routes} from './Routes';

// import {Provider} from 'react-redux';
// import {Store} from '../redux/store';

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    // <Provider store={Store}>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    // </Provider>
  );
};
