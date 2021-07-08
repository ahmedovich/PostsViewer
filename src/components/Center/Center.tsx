import React from 'react';
import {View} from 'react-native';
import {ScreenHeight, ScreenWidth} from 'react-native-elements/dist/helpers';

interface CenterProps {}

export const Center: React.FC<CenterProps> = ({children}) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4c566a',
        elevation: 10,
        borderRadius: 52,
        width: ScreenWidth / 1.1,
        height: ScreenHeight / 2,
        marginBottom: 50,
      }}>
      {children}
    </View>
  );
};
