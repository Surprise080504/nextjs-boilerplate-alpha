/***********************************/
/*╔═══════════════════════════════╗
  ║ Import Modules and Components ║
  ╚═══════════════════════════════╝*/
/***********************************/

//import modules
import styled from 'styled-components';
// import types
import { MaxWidthWrapperProps } from 'types/components/wrapper';

/**************************/
/*╔══════════════════════╗
  ║ Component Definition ║
  ╚══════════════════════╝*/
/**************************/

const MaxWidthWrapper = styled.div<MaxWidthWrapperProps>`
  width: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
`;

/**********************/
/*╔══════════════════╗
  ║ Export Component ║
  ╚══════════════════╝*/
/**********************/

export default MaxWidthWrapper;
