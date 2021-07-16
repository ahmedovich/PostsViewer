import React, {useState, useEffect, useContext} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {useColorScheme, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AppTabs} from './AppTabs';
import {AuthStack} from './AuthStack';
import {Center} from '../components/center/Center';
// is it fixed?

// import {AuthContext} from './context';

interface RoutesProps {}

interface UserModel {
  userName: string;
  isLoading: boolean;
  userToken: string;
}

interface RetrieveTokenAction {
  type: 'RETRIEVE_TOKEN';
  payload: UserModel;
}

interface LoginAction {
  type: 'LOGIN';
  payload: UserModel;
}

interface LogOutAction {
  type: 'LOGOUT';
  payload: UserModel;
}

interface RegisterAction {
  type: 'REGISTER';
  payload: UserModel;
}

type UserAction =
  | RetrieveTokenAction
  | LoginAction
  | LogOutAction
  | RegisterAction;

type UserState = {
  user: UserModel;
  isLoading: boolean;
  userToken: string | undefined;
};

export const Routes: React.FC<RoutesProps> = ({}) => {
  const scheme = useColorScheme();

  // const prevState = {
  //   userName: action.id,
  //   userToken: action.token,
  //   isLoading: false,
  // };

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const AuthContext = React.useMemo(
    () => ({
      signIn: async user => {
        const userToken = String(user[0].userToken);
        const userName = user[0].username;

        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {},
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer theme={DarkTheme}>
      {loginState.userToken !== null ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
