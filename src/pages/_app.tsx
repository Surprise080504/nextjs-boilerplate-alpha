/***********************************/
/*╔═══════════════════════════════╗
  ║ Import Modules and Components ║
  ╚═══════════════════════════════╝*/
/***********************************/

// import modules
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
// import theme and styles
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import defaultTheme, { lightTheme, darkTheme } from 'styles/theme';

/**************************/
/*╔══════════════════════╗
  ║ Component Definition ║
  ╚══════════════════════╝*/
/**************************/

// NProgress appear when router changed
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const darkMode = useDarkMode(true);
  const globalTheme = darkMode.value ? { ...defaultTheme, ...darkTheme } : { ...defaultTheme, ...lightTheme };

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={globalTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

/**********************/
/*╔══════════════════╗
  ║ Export Component ║
  ╚══════════════════╝*/
/**********************/

export default MyApp;
