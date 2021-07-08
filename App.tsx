import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

import {Login} from './src/screens/Login';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
      <Login />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b4252',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
