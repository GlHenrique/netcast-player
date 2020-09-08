import React from 'react';
import Swipeout from 'react-native-swipeout';
import {
  Container,
  BlueContainer,
  CardContainer,
  Card,
  FormContainer,
  InputContainer,
  Input,
  ListContainer,
  ListItem,
  ListIcon,
  NameContainer,
  NameText,
  LinkText,
  DividerContainer,
  Divider,
} from './styles';

const Buttons = [
  {
    text: 'Excluir',
    backgroundColor: '#F40000',
  },
];

const Home: React.FC = () => (
  <Container>
    <BlueContainer />
    <CardContainer>
      <Card>
        <FormContainer>
          <InputContainer>
            <Input placeholder="Nome da Lista" />
          </InputContainer>
          <InputContainer>
            <Input placeholder="URL" />
          </InputContainer>
        </FormContainer>
      </Card>
    </CardContainer>
    <ListContainer>
      <Swipeout backgroundColor="transparent" right={Buttons}>
        <ListItem>
          <ListIcon />
          <NameContainer>
            <NameText>Lista 1</NameText>
            <LinkText>http://lista.m3u.com</LinkText>
          </NameContainer>
        </ListItem>
        <DividerContainer>
          <Divider />
        </DividerContainer>
      </Swipeout>
    </ListContainer>
  </Container>
);

export default Home;
