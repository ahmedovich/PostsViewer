import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, FlatList, Text, TouchableOpacity} from 'react-native';
import {Center} from '../../../components/center/Center';

import {AuthContext} from '../../../screens/context';
import {StyleSheet} from 'react-native';

import faker from 'faker';

interface HomeStackProps {}

const Stack = createStackNavigator();

function Feed() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // useEffect() = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const json = await response.json();
  //   this.setData({data: json});
  // };

  return (
    <Center>
      <FlatList
        renderItem={({item}) => {
          return <Button title={item} onPress={() => {}} />;
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  );
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const {logout} = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}>
                <Text style={styles.signUpButton}>LOGOUT</Text>
              </TouchableOpacity>
            );
          },
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  signUpButton: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ff004c',
  },
});
