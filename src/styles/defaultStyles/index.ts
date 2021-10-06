import { createStitches } from '@stitches/react';

export const { styled: stitchesStyle, css } = createStitches({
  prefix: 'boilerplate-nextJs',

  theme: {
    colors: {
      primary: '#333333',
      secondary: '#FFFFFF',
    },

    radii: {
      default: '4px',
      pill: '9999999px',
    },
    space: {
      4: '0.25rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      44: '2.75rem',
      48: '3rem',
      52: '3.25rem',
      56: '3.5rem',
    },
  },
});
