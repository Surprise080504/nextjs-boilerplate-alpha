/***********************************/
/*╔═══════════════════════════════╗
  ║ Import Modules and Components ║
  ╚═══════════════════════════════╝*/
/***********************************/

//import modules
import styled from 'styled-components';
// import types
import { GridContainerProps } from 'types/components/container';

/**************************/
/*╔══════════════════════╗
  ║ Component Definition ║
  ╚══════════════════════╝*/
/**************************/

const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  width: ${({ width, suffixWidth }) => (width === 'auto' ? width : `${width}${suffixWidth}`)};
  height: ${({ height, suffixHeight }) => (height === 'auto' ? height : `${height}${suffixHeight}`)};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
  place-items: ${({ placeItems }) => placeItems};
  place-content: ${({ placeContent }) => placeContent};
  gap: ${({ gap }) => (typeof gap === 'string' ? gap : `${gap}px`)};
`;

GridContainer.defaultProps = {
  width: 'auto',
  height: 'auto',
  suffixWidth: 'px',
  suffixHeight: 'px',
  background: 'transparent',
  color: '#000',
  gridTemplateColumns: 'none',
  gridTemplateRows: 'none',
  placeItems: 'stretch stretch',
  placeContent: 'stretch stretch',
  gap: 0,
};

/**********************/
/*╔══════════════════╗
  ║ Export Component ║
  ╚══════════════════╝*/
/**********************/

export default GridContainer;
