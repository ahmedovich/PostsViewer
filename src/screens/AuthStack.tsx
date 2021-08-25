import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthParamList} from '../features/paramLists/AuthParamList';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    // <Provider store={store}>
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="SignInScreen">
      <Stack.Screen
        name="SignInScreen"
        options={{headerTitle: 'Sign in'}}
        component={SignInScreen}
      />
      <Stack.Screen
        name="SignUpScreen"
        options={{headerTitle: 'Sign Up'}}
        component={SignUpScreen}
      />
    </Stack.Navigator>
    // </Provider>
  );
};
