import styled from 'styled-components/native';
import {Card} from 'react-native-paper';

// Posts Components styles:
export const PostContainer = styled.FlatList`
  width: 100%;
  margin-vertical: 10px;
`;

export const PostBox = styled.View`
  margin-vertical: 7px;
  background-color: #303236;
  padding-horizontal: 7px;
  border-radius: 5px;
`;

export const PostsText = styled.Text`
  color: #e8d3bb;
  font-size: 18px;
  font-weight: bold;
`;

export const CommentBox = styled.View`
  margin-vertical: 7px;
  background-color: black;
  padding-horizontal: 5px;
  border-radius: 5px;
`;

export const CommentText = styled.Text`
  color: white;
  font-size: 16px;
  font-style: italic;
`;

// Authentication Components styles:
export const SignUpContainer = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: 52px;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
`;

export const SignInContainer = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: 52px;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
`;

export const InputsContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const InputBox = styled.TextInput`
  width: 300px;
  background-color: #a9aaad;
  color: #434c5e;
  padding-horizontal: 16px;
  border-radius: 20px;
  margin-vertical: 10px;
  font-size: 16px;
`;

export const SaveLogin = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-vertical: 20px;
`;

export const CheckBoxView = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 0.7;
  justify-content: flex-start;
  padding-left: 15px;
`;

/*
export const CheckBox = styled.CheckBox`
  width: 10px;
  height: 10px;
  margin-left: 10px;
`;
*/

export const CheckText = styled.Text`
  color: #c9c9ca;
  padding-left: 25px;
  font-size: 15px;
  font-weight: 500;
`;

export const CheckTextView = styled.View`
  flex: 0.5;
  justify-content: flex-end;
`;

export const ForgetText = styled.Text`
  color: #ff004c;
  font-size: 15px;
  font-weight: 500;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SignUpButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #c9c9ca;
  align-self: center;
  padding: 10px;
`;

export const ButtonTextRed = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #ff004c;
  align-self: center;
  padding: 10px;
`;

export const ButtonGray = styled.TouchableOpacity`
  width: 50%;
  height: 40px;
  background-color: #2e3440;
  border-radius: 20px;
  font-size: 16px;
  margin: 15px;
`;

export const ButtonTransparent = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  font-size: 16px;
  margin: 15px;
`;

export const SignUpButton = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  background-color: #2e3440;
  border-radius: 20px;
  font-size: 16px;
  margin: 15px;
`;

export const SignUpQuestionText = styled.Text`
  justify-content: flex-start;
  color: #c9c9ca;
  font-size: 15px;
  font-weight: 500;
`;
