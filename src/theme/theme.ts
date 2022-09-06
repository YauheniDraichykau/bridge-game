import { DefaultTheme } from 'styled-components';

const mainThemeColors = {
  transparent: 'transparent',
  white: '#ffffff',
  darkWhite: 'e6e6e6',
  black: '#000000',
  darkGray: '#3D3D3D',
  blue: '#3333ff',
  darkBlue: '#214096',
  smokyWhite: '#f5f5f5',
  error: '#990000'
};

export const theme: DefaultTheme = {
  header: {
    colors: {
      background: mainThemeColors.darkGray,
      text: mainThemeColors.white
    },
  },
  balanceLine: {
    colors: {
      background: mainThemeColors.white,
      text: mainThemeColors.black
    },
  },
  button: {
    sizes: {
      small: '40px',
      medium: '45px',
      large: '50px'
    },
    colors: {
      primary: {
          background: mainThemeColors.blue,
          backgroundHover: mainThemeColors.darkBlue,
          text: mainThemeColors.white,
          textHover: mainThemeColors.white,
          border: mainThemeColors.blue,
          borderHover: mainThemeColors.darkBlue,
      },
      link: {
          background: mainThemeColors.transparent,
          backgroundHover: mainThemeColors.transparent,
          text: mainThemeColors.white,
          textHover: mainThemeColors.darkWhite,
          border: mainThemeColors.transparent,
          borderHover: mainThemeColors.transparent,
      },
    }
  },
  loginForm: {
    colors: {
      textError: mainThemeColors.error
    }
  },
  board: {
    colors: {
      background: mainThemeColors.smokyWhite
    }
  }
};
