import { createUseStyles } from 'react-jss';

const indexStyles = () => ({
  sectionTitle: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 500,
    margin: '0 auto 80px',
    // color: theme.palette.primary.sectionTitletext,
  },

  '@global': {
    '*': {
      margin: '0 auto',
      boxSizing: 'border-box',
      fontSize: 16,
    },
    button: {
      cursor: 'pointer',
    },
    a: {
      textDecoration: 'none',
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
