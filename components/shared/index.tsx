import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from 'theme/Colors';

const SafeViewContent = styled(SafeAreaView)<{ background?: string; paddingTop?: number }>`
  flex: 1;
  width: 100%;
  background-color: ${props => props.background || Colors.light};
  padding-top: ${props => props.paddingTop || 10}px;
`;

export const ErrorText = styled.Text<{ color?: string; ml?: number }>`
  color: ${props => props.color || Colors.error};
  font-size: 12px;
  margin-left: ${props => props.ml || 0}px;
`;
export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Body: React.FC = props => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    {...props}
    contentContainerStyle={{ paddingBottom: 20 }}
  />
);

export const SafeView: React.FC = props => <SafeViewContent {...props} />;

type SafeViewProps = {
  children?: React.ReactNode;
  background?: string;
  paddingTop?: number;
};
export const StackPage: React.FC<SafeViewProps> = props => (
  <Container {...props}>
    <SafeView>{props.children}</SafeView>
  </Container>
);
