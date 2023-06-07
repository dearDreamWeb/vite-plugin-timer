type Color = 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';

export type ColorMap = {
  [key in Color]: string;
};

export interface Props {
  color?: Color;
  text?: string;
}
