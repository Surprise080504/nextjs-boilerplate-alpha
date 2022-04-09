/***********************************/
/*╔══════════════════╗
  ║ Theme Definition ║
  ╚══════════════════╝*/
/***********************************/

const defaultTheme = {
  // screens for a vast array of web-capable  browsers.
  screens: {
    xs: '425px',
    sm: '480px',
    mm: '768px',
    md: '1024px',
    lg: '1440px',
    xl: '1600px',
  },
  // spacing
  spacing: {
    '1': '8px',
    '2': '12px',
    '3': '16px',
    '4': '24px',
    '5': '32px',
    '6': '48px',
  },
  // font family
  fontFamily: {
    metropolis: ['Metropolis', 'sans-serif'],
    arial: ['Arial', 'sans-serif'],
  },
  // font sizes
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  // font weights
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    bolder: 800,
    black: 900,
  },
  // font style
  fontStyle: {
    italic: 'italic',
    'not-italic': 'normal',
  },
  // letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  // line heights
  lineHeights: {
    xs: '1rem',
    sm: '1.25rem',
    base: '1.5rem',
    lg: '1.75rem',
    xl: '1.75rem',
    '2xl': '2rem',
    '3xl': '2.25rem',
    '4xl': '2.5rem',
    '5xl': 1,
    '6xl': 1,
    '7xl': 1,
    '8xl': 1,
    '9xl': 1,
  },
  // box shadow
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: '0 0 #0000',
  },
};

export const darkTheme = {
  // background colors
  bgColors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    primary: '#25272e',
    secondary: '#15141d',
    pink: '#ff2dbc',
    red: '#ff0000',
  },
  // text colors
  textColors: {
    black: '#000',
    white: '#fff',
    light: '#ffffffbf',
    primary: '#adadad',
    secondary: '#ffffffbf',
    pink: '#ff2dbc',
  },
};

export const lightTheme = {
  // background colors
  bgColors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    primary: '#25272e',
    secondary: '#15141d',
    pink: '#ff2dbc',
    red: '#ff0000',
  },
  // text colors
  textColors: {
    black: '#000',
    white: '#fff',
    light: '#ffffffbf',
    primary: '#adadad',
    secondary: '#ffffffbf',
    pink: '#ff2dbc',
  },
};

export default defaultTheme;
