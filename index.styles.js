import { createUseStyles } from 'react-jss';

const indexStyles = () => ({
  sectionTitle: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 500,
    margin: '0 auto 80px',
    '@media (max-width: 768px)': {
      fontSize: 32,
    },
    '@media (max-width: 425px)': {
      fontSize: 24,
    },

    // color: theme.palette.primary.sectionTitletext,
  },

  '@global': {
    '*': {
      fontFamily: ' Roboto, sans-serif',
      margin: '0 auto',
      boxSizing: 'border-box',
      fontSize: 16,
    },
    button: {
      cursor: 'pointer',
    },
    a: {
      textDecoration: 'none',
      color: 'inherit',
    },
    ul: {
      paddingTop: 20,
    },
    li: {
      listStyle: 'none',
    },
  },
});

export const useIndexStyles = createUseStyles(indexStyles);
