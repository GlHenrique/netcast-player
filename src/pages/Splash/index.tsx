import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Container, LogoContainer, AnimationContainer } from './styles';
import loadingAnimation from '../../assets/animations/loading-animation.json';
import Logo from '../../assets/images/Logo';

const Splash: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 900);
  }, []);

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <AnimationContainer>
        <LottieView
          style={{ width: 150, height: 150 }}
          autoSize
          source={loadingAnimation}
          autoPlay
          loop
        />
      </AnimationContainer>
    </Container>
  );
};

export default Splash;
