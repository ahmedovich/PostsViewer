import React, {useState, useEffect, useContext} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {Login} from './Login';
// import {Register} from './Register';

import {Center} from '../components/center/Center';
import {AuthContext} from '../features/login/components/AuthProvider';
import {AppTabs} from '../features/login/components/AppTabs';
import {AuthStack} from '../features/login/components/AuthStack';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  const scheme = useColorScheme();
  const {user, login} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if the user is logged
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          //decode it
          login();
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator />
      </Center>
    );
  }

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
