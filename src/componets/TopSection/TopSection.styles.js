import { createUseStyles } from 'react-jss';

const topSectionStyles = () => ({
  // wrapper: { //TODO fucking image
  //   background: 'url("../../../public/mask.svg") no-repeat, fixed',
  //   backgroundSize: 'cover',
  //   minHeight: '100vh',
  //   height: 900,
  // },

  content: {
    paddingTop: 600,
    marginLeft: 150,
    '& h1': {
      color: '#fff',
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: 30,
    },
    '& p': {
      color: '#fff',
      fontSize: '1rem',
      fontWeight: 400,
      marginBottom: 30,
      letterSpacing: 2,
    },
    '@media (max-width: 840px)': {
      display: 'none',
    },
  },
});

export const useTopSectionStyles = createUseStyles(topSectionStyles);
