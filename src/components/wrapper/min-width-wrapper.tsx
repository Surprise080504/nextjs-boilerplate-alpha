/***********************************/
/*╔═══════════════════════════════╗
  ║ Import Modules and Components ║
  ╚═══════════════════════════════╝*/
/***********************************/

//import modules
import styled from 'styled-components';
// import types
import { MinWidthWrapperProps } from 'types/components/wrapper';

/**************************/
/*╔══════════════════════╗
  ║ Component Definition ║
  ╚══════════════════════╝*/
/**************************/

const MinWidthWrapper = styled.div<MinWidthWrapperProps>`
  width: 100%;
  min-width: ${({ minWidth }) => `${minWidth}px`};
`;

/**********************/
/*╔══════════════════╗
  ║ Export Component ║
  ╚══════════════════╝*/
/**********************/

export default MinWidthWrapper;
