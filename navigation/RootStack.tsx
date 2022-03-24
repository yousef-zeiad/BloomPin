import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LockScreen } from 'features';
import React from 'react';
import { useAuthorization } from 'services/context/AuthProvider';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const { isAppLoading, user } = useAuthorization();
  return (
    <>
      {!isAppLoading && (
        <Stack.Navigator>
          {!user ? (
            <Stack.Screen
              name='Login'
              component={LockScreen}
              options={{ headerShown: false, animationTypeForReplace: !user ? 'pop' : 'push' }}
            />
          ) : (
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
          )}
        </Stack.Navigator>
      )}
    </>
  );
}
export default RootStack;
