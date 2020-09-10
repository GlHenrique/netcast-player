import Snackbar from 'react-native-snackbar';
import theme from '../../theme';

const ShowSnackbar = (
  message: string = 'Ops! Ocorreu um erro interno. Tente novamente mais tarde',
  action: void = Snackbar.dismiss()
) => {
  Snackbar.show({
    text: message,
    duration: 7000,
    fontFamily: 'Lato-Regular',
    action: {
      text: 'OK',
      textColor: theme.colors.secondary,
      onPress: () => action,
    },
  });
};

export default ShowSnackbar;
