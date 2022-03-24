import React from 'react';
import { Container, NumberContainer, NumberPad, NumberText } from './NumberPadStyled';

/**
 *
 * We can use FlatList but i wanted to make it simple
 */
type NumberPadProp = {
  onPress: (number: string) => void;
  number: {
    number: string;
    id: number;
  }[];
};
export const NumberButton: React.FC<NumberPadProp> = ({ onPress, number }) => {
  return (
    <Container>
      <NumberContainer>
        {number.map(item => (
          <NumberPad key={item.id} activeOpacity={0.8} onPress={() => onPress(item.number)}>
            <NumberText>{item.number}</NumberText>
          </NumberPad>
        ))}
      </NumberContainer>
    </Container>
  );
};
