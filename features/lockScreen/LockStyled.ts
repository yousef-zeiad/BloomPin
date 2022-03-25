import styled from 'styled-components/native';
import Colors from 'theme/Colors';

export const LockContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const CodeBoxContainer = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
`;
export const CodeBoxTextView = styled.View<{ isNumber: string }>`
  margin: 20px;
  align-items: center;
  justify-content: center;
  border-bottom-color: ${Colors.black};
  border-bottom-width: ${props => (props.isNumber ? 0 : 2)}px;
  padding-bottom: 20px;
  padding-top: 20px;
  flex: 1;
`;
