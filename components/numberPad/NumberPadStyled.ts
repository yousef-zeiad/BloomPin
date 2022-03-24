import Colors from 'constants/Colors';
import styled from 'styled-components/native';
export const NumberPad = styled.TouchableOpacity`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  background-color: ${Colors.dark};
  justify-content: center;
  align-items: center;
  margin: 12px;
`;
export const NumberText = styled.Text`
  font-size: 20px;
  color: black;
`;
export const NumberContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 50px;
  width: 282px;
  height: 348px;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;
