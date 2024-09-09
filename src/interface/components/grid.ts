/* eslint-disable @typescript-eslint/no-unused-vars */
export type numbersSpacingGrid = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type directions = 'row' | 'rowReverse' | 'column' | 'columnReverse';
type wraps = 'wrap' | 'wrap-reverse' | 'nowrap';

export interface GridContainerProps<_ extends React.ElementType> {
  container?: boolean;
  columnSpacing?: numbersSpacingGrid;
  rowSpacing?: numbersSpacingGrid;
  spacing?: numbersSpacingGrid;
  direction?: directions;
  wrap?: wraps;
}

export interface GridItemProps<_ extends React.ElementType> {
  item?: boolean;
  lg?: numbersSpacingGrid;
  md?: numbersSpacingGrid;
  sm?: numbersSpacingGrid;
  xs?: numbersSpacingGrid;
}

export interface GridProps<T extends React.ElementType> extends GridContainerProps<T>, GridItemProps<T> {
  as?: T;
}