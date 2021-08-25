import React, {useContext, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator} from 'react-native-paper';
import {StyleSheet, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {ScreenWidth} from 'react-native-elements/dist/helpers';

import {Center} from '../components/center/Center';
import {AuthContext} from './context';

import {
  ButtonTextRed,
  PostContainer,
  PostBox,
  PostsText,
  CommentBox,
  CommentText,
} from '../features/login/components/authentication.styles';

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
      <PostContainer
        data={data}
        renderItem={({item}) => (
          <View>
            <PostBox>
              <PostsText>
                {item.title}
                {':'}
              </PostsText>
              <CommentBox>
                <CommentText>{item.body}</CommentText>
              </CommentBox>
            </PostBox>
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
                <ButtonTextRed>LOGOUT</ButtonTextRed>
              </TouchableOpacity>
            );
          },
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};
