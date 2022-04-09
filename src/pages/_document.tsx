/***********************************/
/*╔═══════════════════════════════╗
  ║ Import Modules and Components ║
  ╚═══════════════════════════════╝*/
/***********************************/

// import modules
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**************************/
/*╔══════════════════════╗
  ║ Component Definition ║
  ╚══════════════════════╝*/
/**************************/

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => (props: any) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link href="http://fonts.cdnfonts.com/css/metropolis" rel="stylesheet" />
          <link href="http://fonts.cdnfonts.com/css/arial" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <noscript>Sorry, your browser does not support JavaScript!</noscript>
          <NextScript />
        </body>
      </Html>
    );
  }
}

/**********************/
/*╔══════════════════╗
  ║ Export Component ║
  ╚══════════════════╝*/
/**********************/

export default MyDocument;
