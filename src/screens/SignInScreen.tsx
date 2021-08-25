import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {ScreenHeight, ScreenWidth} from 'react-native-elements/dist/helpers';

import {Logo} from '../components/logo/Logo';
import {Center} from '../components/center/Center';
import {
  AuthParamList,
  AuthNavProps,
} from '../features/login/paramLists/AuthParamList';
import Users from '../model/users';
import {AuthContext} from './context';

import {
  SignInContainer,
  InputsContainer,
  InputBox,
  CheckBoxView,
  CheckTextView,
  CheckText,
  ForgetText,
  SaveLogin,
  ButtonContainer,
  ButtonText,
  ButtonGray,
  ButtonTextRed,
} from '../features/login/components/authentication.styles';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName: string, password: string) => {
    const userFound = Users.filter(item => {
      return userName === item.username && password === item.password;
    });

    if (data.username.length === 0 || data.password.length === 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Roger that!'}],
      );
      return;
    }

    if (userFound.length === 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Roger that!'},
      ]);
      return;
    }
    signIn(userFound);
  };

  return (
    <SignInContainer>
      <Logo />
      <Center>
        <InputsContainer>
          <InputBox
            placeholder="UserName"
            placeholderTextColor="#434c5e"
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
            onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          />
          <InputBox
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#434c5e"
            onChangeText={val => handlePasswordChange(val)}
          />
        </InputsContainer>
        <SaveLogin>
          <CheckBoxView>
            <CheckBox onCheckColor="blue" style={styles.checkBox} />
            <CheckText>Remember me</CheckText>
          </CheckBoxView>
          <CheckTextView>
            <TouchableOpacity onPress={() => {}}>
              <ForgetText>Forgot password?</ForgetText>
            </TouchableOpacity>
          </CheckTextView>
        </SaveLogin>
        <ButtonContainer>
          <ButtonGray
            onPress={() => {
              loginHandle(data.username, data.password);
            }}>
            <ButtonText>Sign in</ButtonText>
          </ButtonGray>
        </ButtonContainer>
        <ButtonText>Don't you have an account?</ButtonText>
        <ButtonContainer>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpScreen');
              // navigation.goBack()
            }}>
            <ButtonTextRed>Sign Up</ButtonTextRed>
          </TouchableOpacity>
        </ButtonContainer>
      </Center>
    </SignInContainer>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  checkBox: {
    width: 10,
    height: 10,
    marginLeft: 10,
  },
});
