/***********************************/
/*╔══════════════════════════╗
  ║ Import Styled Components ║
  ╚══════════════════════════╝*/
/***********************************/

import { createGlobalStyle } from 'styled-components';

/***********************************/
/*╔═════════════════════════╗
  ║ Global Style Definition ║
  ╚═════════════════════════╝*/
/***********************************/

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;

    > * {
      flex-shrink: 0;
    }
  }
`;

/***********************************/
/*╔═════════════════════╗
  ║ Export Global Style ║
  ╚═════════════════════╝*/
/***********************************/

export default GlobalStyle;
