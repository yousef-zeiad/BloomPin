import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStack from './RootStack';

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
export default Navigation;
