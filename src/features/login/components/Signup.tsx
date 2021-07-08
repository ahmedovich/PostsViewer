import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {ScreenHeight, ScreenWidth} from 'react-native-elements/dist/helpers';

interface SignUpProps {}

function LoginInputs() {
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

function SignIn() {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Un</Text>
      </TouchableOpacity>
    </View>
  );
}

function SignUp() {
  return (
    <View style={styles.signUpView}>
      <Text style={styles.signUpText}>Already have an account yet?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity>
          <Text style={styles.signUpButton}>Sign Ip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const SignUp: React.FC<SignUpProps> = ({}) => {
  return (
    <View style={styles.container}>
      <LoginInputs />
      <SignIn />
      <SignUp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c566a',
    elevation: 10,
    borderRadius: 52,
    width: ScreenWidth / 1.1,
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
  },
  signUpButton: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ff004c',
    alignSelf: 'center',
    padding: 10,
  },
});
