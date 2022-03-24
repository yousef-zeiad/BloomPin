import React from 'react';
import { useMutation } from 'react-query';
import OauthService from 'services/apis/OauthService';
import { useAuthorization } from 'services/context/AuthProvider';
import { Container, LogoutButton, LogoutTitle } from './LogoutStyled';

export const HomeScreen: React.FC = () => {
  const { signOut } = useAuthorization();
  const logout = useMutation(() => OauthService.logout());

  const handleLogout = () => {
    logout.mutate();
    signOut();
  };

  return (
    <Container>
      <LogoutButton onPress={handleLogout}>
        <LogoutTitle>Logout</LogoutTitle>
      </LogoutButton>
    </Container>
  );
};
