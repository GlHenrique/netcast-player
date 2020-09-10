import React from 'react';
import { Button, Text } from './styles';

interface Props {
  onPress: () => void;
}

const SwipeoutButton: React.FC<Props> = ({ onPress }) => (
  <Button onPress={onPress}>
    <Text>Excluir</Text>
  </Button>
);

export default SwipeoutButton;
