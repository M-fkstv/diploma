import { createUseStyles } from 'react-jss';

const buttonStyles = (theme) => ({
  formButton: {
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: '#000000',
    minWidth: '50%',
    fontSize: '1.5rem',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
      transition: 'color 0.5s ease-in-out, background-color 1s ease-in-out',
    },
    '@media (600px <= width <= 1200px)': {
      fontSize: '1.25rem',
    },
    '@media (320px <= width <= 600px)': {
      fontSize: '1rem',
    },
  },

  showMoreButton: {
    cursor: 'pointer',
    color: '#000',
    backgroundColor: '#fff',
    width: 300,
    fontSize: '1.5rem',
    padding: '10px 20px',
    marginTop: 40,
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
      transition: 'color 0.5s ease-in-out, background-color 1s ease-in-out',
    },
  },

  burgerButton: {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 0,
    '@media (min-width: 1200px)': {
      display: 'none',
    },
  },

  headerBtn: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 18,
    backgroundColor: ' transparent',
    border: 0,
    cursor: 'pointer',
    '& span': {
      marginRight: 5,
    },
  },

  primaryBtn: {
    composes: '$headerBtn',
    color: theme.palette.primary.mainText,
  },

  asideBtn: {
    composes: '$headerBtn',
    color: '#000',
  },

  topSectionButton: {
    width: 250,
    height: 40,
    cursor: 'pointer',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 400,
    backgroundColor: 'transparent',
    border: '1px solid #fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
      transition: 'all 1s ease-in-out',
    },
    '@media (max-width: 840px)': {
      color: '#000',
      borderColor: '#000',
      '&:hover': {
        backgroundColor: '#000',
        color: '#fff',
        transition: 'all 1s ease-in-out',
      },
    },
  },

  wishlistButton: {
    position: 'absolute',
    top: '2%',
    left: '81%',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 0,
    color: '#ffffff',
    '&:hover  ': {
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
  },

  hoverButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 48,
    width: 160,
    height: 48,
    textAlign: 'center',
    fontSize: 18,
    // opacity: 0,
    cursor: 'pointer',
    // '&:hover': {
    //   opacity: 1,
    //   transition: 'opacity 200ms linear',
    // },
    '&:active': {
      scale: 0.99,
    },
  },
});

export const useButtonStyles = createUseStyles(buttonStyles);
