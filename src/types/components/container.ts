/***********************************/
/*╔═════════════════╗
  ║ Type Definition ║
  ╚═════════════════╝*/
/***********************************/

// type of flex container
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline';
type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'baseline'
  | 'first baseline'
  | 'last baseline';
type Gap = string | number;
// type of grid container

/***********************************/
/*╔══════════════════════╗
  ║ Interface Definition ║
  ╚══════════════════════╝*/
/***********************************/

// interface of flex container
interface defaultProps {
  width: number | 'auto';
  suffixWidth: 'px' | 'vw' | '%';
  height: number | 'auto';
  suffixHeight: 'px' | 'vw' | '%';
  background: string;
  color: string;
}

export interface FlexContainerProps extends defaultProps {
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  gap?: Gap;
}

// interface of grid container
export interface GridContainerProps extends defaultProps {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  placeItems: string;
  placeContent: string;
  gap?: Gap;
}
