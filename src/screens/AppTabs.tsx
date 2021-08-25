import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppParamList} from '../features/paramLists/HomeParamList';
import {Text, Button, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Zocial from 'react-native-vector-icons/Zocial';
// import {AuthContext} from './AuthProvider';

import {HomeStack} from './HomeStack';
import {AuthContext} from '../screens/context';

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

function Home() {
  const {signOut} = useContext(AuthContext);
  return (
    <View>
      <Text>home</Text>
      <Button title="Logout" onPress={() => signOut()} />
    </View>
  );
}

// function Search() {
//   return (
//     <View>
//       <Text style={styles.signUpButton}>search</Text>
//     </View>
//   );
// }

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            // } else if (route.name === 'Search') {
            //   return <Zocial name={'angellist'} size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name="Home" component={HomeStack} />
      {/* <Tabs.Screen name="Search" component={Search} /> */}
    </Tabs.Navigator>
  );
};
