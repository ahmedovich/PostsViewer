import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {ScreenHeight, ScreenWidth} from 'react-native-elements/dist/helpers';

import {Logo} from '../../../components/logo/Logo';
import {Center} from '../../../components/center/Center';
import {AuthParamList, AuthNavProps} from '../paramLists/AuthParamList';
import {AuthContext} from './AuthProvider';

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

function LoginInputs({navigation, route}: AuthNavProps<'LoginInputs'>) {
  return (
    <View>
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        placeholderTextColor="#434c5e"
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#434c5e"
      />
    </View>
  );
}

function SaveLogin({navigation, route}: AuthNavProps<'SaveLogin'>) {
  return (
    <View style={styles.saveLogin}>
      <View style={styles.checkBoxView}>
        <CheckBox onCheckColor="blue" style={styles.checkBox} />
        <Text style={styles.checkText}>Remember me</Text>
      </View>
      <View style={styles.checkTextView}>
        <TouchableOpacity>
          <Text style={styles.forgetText}>Forget password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Login({navigation}: AuthNavProps<'Login'>) {
  const {login} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Logo />
      <Center>
        <LoginInputs />
        <SaveLogin />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => {
              login();
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.signUpText}>Don't you have an account?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
              // navigation.goBack()
            }}>
            <Text style={styles.signUpButton}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Center>
    </View>
  );
}

function Register({navigation, route}: AuthNavProps<'Register'>) {
  const {login} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Logo />
      <Center>
        <LoginInputs />
        <View style={styles.buttonsContainer}>
          <View style={styles.signUpView}>
            <TouchableOpacity
              onPress={() => {
                login();
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.signUpText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
                // navigation.goBack()
              }}>
              <Text style={styles.signUpButton}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Center>
    </View>
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
