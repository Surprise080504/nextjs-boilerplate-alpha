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
type GridTemplateColumns = string;
type GridTemplateRows = string;

/***********************************/
/*╔══════════════════════╗
  ║ Interface Definition ║
  ╚══════════════════════╝*/
/***********************************/

// interface of flex container
export interface FlexContainerProps {
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  gap?: Gap;
}

// interface of grid container
export interface GridContainerProps {
  gridTemplateColumns?: GridTemplateColumns;
  gridTemplateRows?: GridTemplateRows;
}
