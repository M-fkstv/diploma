import { createUseStyles } from 'react-jss';

export const salesStyles = () => ({
  root: {
    // backgroundColor: theme.palette.primary.backgroundColor,
    paddingTop: 120,
    paddingBottom: 120,
    '@media (max-width: 1200px)': {},

    sectionTitle: {
      position: 'relative',
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: 500,
      margin: '0 auto 106px',
      // color: theme.palette.primary.sectionTitletext,
    },
  },

  examples: {
    position: 'relative',
    maxWidth: 1240,
    gap: 16,
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
});

export const useSalesStyles = createUseStyles(salesStyles);
