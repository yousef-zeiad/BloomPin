import { NativeStackScreenProps } from '@react-navigation/native-stack';

// A global variable for storing the navigation prop

export type RootStackParamList = {
  Logout: undefined;
  Login: undefined;
};
// // To get the RootStackScreen types you can use the following code:
export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;
