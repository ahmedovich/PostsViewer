import React, {useContext, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator} from 'react-native-paper';
import {StyleSheet, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {ScreenWidth} from 'react-native-elements/dist/helpers';

import {Center} from '../components/center/Center';
import {AuthContext} from './context';

import {PostsParamList} from '../features/login/paramLists/PostsParamList';

interface HomeStackProps {}

export interface List {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Stack = createStackNavigator<PostsParamList>();

const Feed = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator />
      </Center>
    );
  }

  return (
    <Center>
      <FlatList
        data={data}
        style={styles.postContainer}
        renderItem={({item}) => (
          <View>
            <View key={item.id} style={styles.postBox}>
              <Text style={styles.postsText}>
                {item.title}
                {':'}
              </Text>
              <View key={item.id} style={styles.commentBox}>
                <Text style={styles.commentsText}>{item.body}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </Center>
  );
};

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
  postContainer: {
    width: ScreenWidth,
    margin: 10,
  },
  postBox: {
    margin: 7,
    backgroundColor: '#303236',
    padding: 5,
    borderRadius: 5,
  },
  postsText: {
    color: '#e8d3bb',
    fontSize: 18,
    fontFamily: 'bold',
  },
  commentBox: {
    margin: 3,
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 5,
    elevation: 15,
  },
  commentsText: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'italic',
  },
});
