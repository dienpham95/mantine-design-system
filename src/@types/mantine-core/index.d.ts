import { Tuple } from '@mantine/core';

type CustomColors = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<CustomColors, Tuple<string, 10>>;
  }
}
