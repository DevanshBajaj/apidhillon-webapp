import { createTheme, Theme } from "@nextui-org/react"

const fonts = {
  sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
};

const sharedTheme: Theme = {
  theme: {
    fonts
  }
};

export const lightTheme = createTheme({
  ...sharedTheme,
  type: "light",
  theme: {
    colors: {
      // brand colors
      background: '#fff',
      primaryDark: '#7F56D9',
      primary: '#9B51E0',
      primaryLight: '#F4EBFF',

      gradient: 'linear-gradient(117.54deg, rgba(242, 119, 80, 0.3) 21.62%, rgba(57, 72, 179, 0.3) 41.18%, rgba(17, 35, 153, 0.24) 53.74%, rgba(6, 182, 34, 0.3) 77.69%);',

      // you can also create your own color
      // myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
  },
});

export const darkTheme = createTheme({
  ...sharedTheme,
  type: "dark",
  theme: {
    colors: {
      // brand colors
      background: '#111',
      primaryDark: '#7F56D9',
      primary: '#9B51E0',
      primaryLight: '#F4EBFF',

      gradient: 'linear-gradient(117.54deg, rgba(242, 119, 80, 0.3) 21.62%, rgba(57, 72, 179, 0.3) 41.18%, rgba(17, 35, 153, 0.24) 53.74%, rgba(6, 182, 34, 0.3) 77.69%);',

      // you can also create your own color
      // myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
  },
});