import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../Images/blogLogo.png')} />
      <Text style={styles.logoText}>Welcome to the App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(225, 225, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
