import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
    outline: 0,

    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },

  body: {
    lineHeight: 1,
    background: '#FFFF',
  },

  html: {
    fontSize: '16px',
  },

  button: {
    cursor: 'pointer',
    border: 0,
  },

  a: {
    textDecoration: 'none',
  },

  span: {
    display: 'block',
  },
});
