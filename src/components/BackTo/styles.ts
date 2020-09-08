import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.SafeAreaView`
  position: absolute;
  left: 24px;
  top: 24px;
  z-index: 2;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;

export const IconLeft = styled(Icon).attrs({
  name: 'arrow-left',
  size: 24,
  color: 'black',
})``;
