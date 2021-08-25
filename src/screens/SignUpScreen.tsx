import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {ScreenHeight, ScreenWidth} from 'react-native-elements/dist/helpers';

import {Logo} from '../components/logo/Logo';
import {Center} from '../components/center/Center';
import {
  AuthParamList,
  AuthNavProps,
} from '../features/login/paramLists/AuthParamList';

import {
  SignUpContainer,
  InputsContainer,
  InputBox,
  ButtonContainer,
  ButtonText,
  SignUpButton,
  ButtonTransparent,
  SignUpButtonContainer,
  ButtonTextRed,
  SignUpQuestionText,
} from '../features/login/components/authentication.styles';

const SignUpScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  return (
    <SignUpContainer>
      <Logo />
      <Center>
        <InputsContainer>
          <InputBox
            placeholder="UserName"
            placeholderTextColor="#434c5e"
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
          />
          <InputBox
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#434c5e"
            onChangeText={val => handlePasswordChange(val)}
          />
          <InputBox
            placeholder="Confirm your Password"
            secureTextEntry={true}
            placeholderTextColor="#434c5e"
            onChangeText={val => handleConfirmPasswordChange(val)}
          />
        </InputsContainer>
        <ButtonContainer>
          <SignUpButtonContainer>
            <SignUpButton onPress={() => {}}>
              <ButtonText>Sign Up</ButtonText>
            </SignUpButton>
            <SignUpQuestionText>Already have an account?</SignUpQuestionText>
            <ButtonTransparent
              onPress={() => {
                navigation.navigate('SignInScreen');
                // navigation.goBack()
              }}>
              <ButtonTextRed>Sign In</ButtonTextRed>
            </ButtonTransparent>
          </SignUpButtonContainer>
        </ButtonContainer>
      </Center>
    </SignUpContainer>
  );
};

export default SignUpScreen;
