import styled from 'styled-components/native';
import theme from '../../theme';

export const Button = styled.TouchableOpacity`
  background: ${theme.colors.red};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: ${theme.fontBold};
  color: white;
  font-size: 16px;
`;
