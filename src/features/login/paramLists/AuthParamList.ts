import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type AuthParamList = {
  Login: any;
  Register: any;
  LoginInputs: any;
  SaveLogin: any;
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};
