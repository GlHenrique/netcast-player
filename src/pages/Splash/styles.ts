import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  width: 150px;
  height: 150px;
`;

export const AnimationContainer = styled.View`
  position: absolute;
  bottom: 30px;
`;
