import React from 'react';
import { Container, Button, IconLeft } from './styles';

interface Props {
  onPress?: (() => void) | undefined;
}

const BackTo: React.FC<Props> = ({ onPress }) => (
  <Container>
    <Button onPress={onPress}>
      <IconLeft />
    </Button>
  </Container>
);

export default BackTo;
