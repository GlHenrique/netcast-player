import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const BlueContainer = styled.View`
  height: 300px;
  background-color: ${theme.colors.primary};
`;

export const CardContainer = styled.View`
  top: -106.5px;
  align-items: center;
`;

export const Card = styled.View`
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  background: ${theme.colors.background};
  border-radius: 4px;
  width: 90%;
  height: 213px;
`;

export const FormContainer = styled.View`
  padding: 16px;
  flex: 1;
`;

export const InputContainer = styled.View`
  border: 1px solid ${theme.colors.primary};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.3)',
  selectionColor: theme.colors.primary,
  autoCorrect: false,
  autoCapitalize: 'none',
  autoComplete: false,
})``;

export const SubmitContainer = styled.View`
  align-items: center;
`;

export const SubmitButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  background: transparent;
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
  height: 45px;
  align-items: center;
  justify-content: center;
  width: 30%;
`;

export const SubmitButtonText = styled.Text`
  font-family: ${theme.font};
  color: ${theme.colors.primary};
`;

export const ListContainer = styled.View`
  padding: 16px;
  top: -48px;
`;

export const ListItem = styled.TouchableOpacity`
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

export const ListIcon = styled(Icon).attrs({
  name: 'format-list-bulleted',
  size: 24,
  color: theme.colors.secondary,
})`
  margin-right: 16px;
`;

export const NameContainer = styled.View`
  width: 100%;
`;

export const NameText = styled.Text`
  font-family: ${theme.font};
  font-size: 16px;
  margin-bottom: 8px;
`;

export const LinkText = styled.Text`
  font-family: ${theme.font};
`;

export const DividerContainer = styled.View`
  padding: 0 16px;
`;

export const Divider = styled.View`
  height: 0.5px;
  background-color: rgba(0, 0, 0, 0.3);
`;
