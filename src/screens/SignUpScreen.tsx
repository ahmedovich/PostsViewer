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
    <View style={styles.container}>
      <Logo />
      <Center>
        <View>
          <TextInput
            style={styles.inputBox}
            placeholder="UserName"
            placeholderTextColor="#434c5e"
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#434c5e"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Confirm your Password"
            secureTextEntry={true}
            placeholderTextColor="#434c5e"
            onChangeText={val => handleConfirmPasswordChange(val)}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.signUpView}>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.signUpText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignInScreen');
                // navigation.goBack()
              }}>
              <Text style={styles.signUpButton}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Center>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    borderRadius: 52,
    width: ScreenWidth / 1,
    height: ScreenHeight / 2,
    marginBottom: 50,
  },

  inputBox: {
    width: 300,
    backgroundColor: '#a9aaad',
    color: '#434c5e',
    paddingHorizontal: 16,
    borderRadius: 20,
    elevation: 5,
    marginVertical: 10,
    fontSize: 16,
  },

  saveLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  checkBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.7,
    justifyContent: 'flex-start',
    paddingLeft: 15,
  },
  checkBox: {
    width: 10,
    height: 10,
    marginLeft: 10,
  },
  checkTextView: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  checkText: {
    color: '#c9c9ca',
    paddingLeft: 25,
    fontSize: 15,
    fontWeight: '500',
  },
  forgetText: {
    color: '#ff004c',
    fontSize: 15,
    fontWeight: '500',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '50%',
    height: 40,
    backgroundColor: '#2e3440',
    borderRadius: 20,
    elevation: 5,
    fontSize: 16,
    margin: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#c9c9ca',
    alignSelf: 'center',
    padding: 10,
  },

  signUpView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    justifyContent: 'flex-start',
    color: '#c9c9ca',
    fontSize: 15,
    fontWeight: '500',
  },
  signUpButton: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ff004c',
    alignSelf: 'center',
    padding: 10,
  },
});
