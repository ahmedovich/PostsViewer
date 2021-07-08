import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Logo} from '../features/login/components/Logo';
import {Form} from '../features/login/components/Form';
import {SignUp} from '../features/login/components/Signup';

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Logo />
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextcont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
