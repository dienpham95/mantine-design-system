import { Tuple, DefaultMantineColor } from '@mantine/core';

type CustomColors =
  | DefaultMantineColor
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<CustomColors, Tuple<string, 10>>;
  }
}
