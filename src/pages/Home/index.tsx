import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Swipeout from 'react-native-swipeout';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { Keyboard } from 'react-native';
import {
  Container,
  BlueContainer,
  CardContainer,
  Card,
  FormContainer,
  InputContainer,
  Input,
  SubmitContainer,
  SubmitButton,
  SubmitButtonText,
  ListContainer,
  ListItem,
  ListIcon,
  NameContainer,
  NameText,
  LinkText,
  DividerContainer,
  Divider,
} from './styles';
import validateUrl from '../../utils/urlValidator';
import SwipeoutButton from '../../components/SwipeoutButton';
import ShowSnackbar from '../../components/Snackbar';
import checkForDuplicates from '../../utils/checkDuplicates';

interface List {
  name: string;
  url: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [list, setList] = useState<List[]>([]);

  const getList = async () => {
    const items = await AsyncStorage.getItem('@netcast-list');
    if (items) {
      setList(JSON.parse(items));
    }
  };

  const handleAddList = async () => {
    Keyboard.dismiss();
    if (!name) {
      ShowSnackbar('Insira o nome da lista');
      return;
    }
    const isValidUrl = validateUrl(url);
    if (isValidUrl) {
      const newList = [...list, { name, url }];
      if (
        checkForDuplicates(newList, 'name') ||
        checkForDuplicates(newList, 'url')
      ) {
        ShowSnackbar('Itens duplicados');
        return;
      }
      setList([...list, { name, url }]);
      AsyncStorage.setItem(
        '@netcast-list',
        JSON.stringify([...list, { name, url }])
      );
      setName('');
      setUrl('');
      return;
    }
    ShowSnackbar('URL inválida');
  };

  const handleDelete = async (uri: string) => {
    setList(list.filter((item) => item.url !== uri));
    await AsyncStorage.setItem(
      '@netcast-list',
      JSON.stringify(list.filter((item) => item.url !== uri))
    );
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setList([]);
      getList();
    });
    return unsubscribe;
  }, [getList]);

  return (
    <Container>
      <BlueContainer />
      <CardContainer>
        <Card>
          <FormContainer>
            <InputContainer>
              <Input
                value={name}
                onChangeText={(e) => setName(e)}
                returnKeyType="next"
                placeholder="Nome da Lista"
              />
            </InputContainer>
            <InputContainer>
              <Input
                value={url}
                onChangeText={(e) => setUrl(e)}
                returnKeyType="done"
                placeholder="URL"
              />
            </InputContainer>
            <SubmitContainer>
              <SubmitButton onPress={() => handleAddList()}>
                <SubmitButtonText>Salvar</SubmitButtonText>
              </SubmitButton>
            </SubmitContainer>
          </FormContainer>
        </Card>
      </CardContainer>
      <ListContainer style={{ flex: 1 }}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.url}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Swipeout
              key={item.url}
              backgroundColor="transparent"
              right={[
                {
                  component: (
                    <SwipeoutButton onPress={() => handleDelete(item.url)} />
                  ),
                },
              ]}
              sensitivity={10}
            >
              <ListItem>
                <ListIcon />
                <NameContainer>
                  <NameText>{item.name}</NameText>
                  <LinkText>{item.url}</LinkText>
                </NameContainer>
              </ListItem>
              <DividerContainer>
                <Divider />
              </DividerContainer>
            </Swipeout>
          )}
        />
      </ListContainer>
    </Container>
  );
};

export default Home;
