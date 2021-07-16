import React from 'react';
import {View} from 'react-native';
//fix update

interface CenterProps {}

export const Center: React.FC<CenterProps> = ({children}) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </View>
  );
};
