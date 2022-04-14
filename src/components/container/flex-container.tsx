/***********************************/
/*╔═══════════════════════════════╗
  ║ Import Modules and Components ║
  ╚═══════════════════════════════╝*/
/***********************************/

//import modules
import styled from 'styled-components';
// import types
import { FlexContainerProps } from 'types/components/container';

/**************************/
/*╔══════════════════════╗
  ║ Component Definition ║
  ╚══════════════════════╝*/
/**************************/

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  width: ${({ width, suffixWidth }) => (width === 'auto' ? width : `${width}${suffixWidth}`)};
  height: ${({ height, suffixHeight }) => (height === 'auto' ? height : `${height}${suffixHeight}`)};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  gap: ${({ gap }) => (typeof gap === 'string' ? gap : `${gap}px`)};
`;

FlexContainer.defaultProps = {
  width: 'auto',
  height: 'auto',
  suffixWidth: 'px',
  suffixHeight: 'px',
  background: 'transparent',
  color: '#000',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
  gap: 0,
};

/**********************/
/*╔══════════════════╗
  ║ Export Component ║
  ╚══════════════════╝*/
/**********************/

export default FlexContainer;
