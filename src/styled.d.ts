import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    header: {
      colors: {
        background: string
        text: string
      },
    },
    balanceLine: {
      colors: {
        background: string
        text: string
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
          background: string,
          backgroundHover: string,
          text: string,
          textHover: string,
          border: string,
          borderHover: string,
        },
        link: {
          background: string,
          backgroundHover: string,
          text: string,
          textHover: string,
          border: string,
          borderHover: string,
        },
      }
    },
    loginForm: {
      colors: {
        textError: string
      }
    },
    board: {
      colors: {
        background: string
      }
    }
  }
}
