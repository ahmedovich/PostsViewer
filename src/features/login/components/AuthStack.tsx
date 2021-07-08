import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {Text, Button} from 'react-native';

import {Center} from '../../../components/center/Center';
import {AuthParamList, AuthNavProps} from '../paramLists/AuthParamList';
import {AuthContext} from './AuthProvider';

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

function Register({navigation, route}: AuthNavProps<'Register'>) {
  return (
    <Center>
      <Text>route name: {route.name}</Text>
      <Button
        title="Go to login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </Center>
  );
}

function Login({navigation, route}: AuthNavProps<'Login'>) {
  const {login} = useContext(AuthContext);
  return (
    <Center>
      <Text>route name: {route.name}</Text>
      <Button
        title="Go to login"
        onPress={() => {
          login();
        }}
      />
      <Button
        title="Go to register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </Center>
  );
}

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Login">
      <Stack.Screen
        name="Login"
        options={{headerTitle: 'Sign in'}}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{headerTitle: 'Sign Up'}}
        component={Register}
      />
    </Stack.Navigator>
  );
};
