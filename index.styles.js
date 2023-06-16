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
    body: {
      fontSize: 16,
    },
    a: {
      textDecoration: 'none',
    },
    ul: {
      paddingTop: 20,
    },
    li: {
      marginBottom: 10,
      listStyle: 'none',
    },
  },
});

export const useIndexStyles = createUseStyles(indexStyles);
