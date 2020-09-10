interface Theme {
  font: string;
  fontBold: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    red: string;
  };
}

const theme: Theme = {
  font: 'Lato-Regular',
  fontBold: 'Lato-Bold',
  colors: {
    primary: '#173355',
    secondary: '#e91e63',
    background: '#FEFEFE',
    red: '#F40000',
  },
};

export default theme;
