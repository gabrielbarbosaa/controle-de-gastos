import '@emotion/react';
import type { MantineTheme } from '@mantine/core';

declare module '@emotion/react' {
  export interface Theme extends MantineTheme {
    colorScheme: string,

    colors: {
        blue: any,
        purple: any,
        yellow: any,

        black: any,
        white: any,
    }
  }
}