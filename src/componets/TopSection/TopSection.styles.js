import { createUseStyles } from 'react-jss';

const topSectionStyles = () => ({
  // wrapper: {
  //   //TODO fucking image
  //   background: 'url("../../../public/mask.png") no-repeat, fixed',
  //   backgroundSize: 'cover',
  //   minHeight: '100vh',
  //   height: 900,
  // },

  content: {
    position: 'absolute',
    left: 120,
    bottom: 150,
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
      position: 'static',
      marginTop: 40,
      textAlign: 'center',
      '& h1': {
        color: '#000',
        wordBreak: ' break-word',
        // fontSize: '2.5rem',
      },
      '& p': {
        color: '#000',
        // fontSize: '1rem',
      },
    },
  },
});

export const useTopSectionStyles = createUseStyles(topSectionStyles);
