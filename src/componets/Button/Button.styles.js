import { createUseStyles } from 'react-jss';

const buttonStyles = (theme) => ({
  formButton: {
    color: '#fff',
    backgroundColor: '#000000',
    minWidth: '50%',
    width: '50%',
    margin: '0 auto',
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
    '&[disabled]': {
      opacity: 0.2,
      cursor: 'not-allowed',
    },
  },

  showMoreButton: {
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
    backgroundColor: 'transparent',
    border: 0,
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
    top: 0,
    left: '81%',
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
    fontSize: '1rem',
    // opacity: 0,
    // '&:hover': {
    //   opacity: 1,
    //   transition: 'opacity 200ms linear',
    // },
    '&:active': {
      scale: 0.99,
    },
  },
  instaBlockBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1rem',
    marginLeft: 24,
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      height: 6,
      width: 6,
      border: '2px solid #000',
      borderRight: 0,
      borderTop: 0,
      top: 6,
      left: 70,
      zIndex: 2,
      transform: 'rotate(235deg) skew(20deg)',
    },
  },

  signUpButton: {
    border: 'none',
    fontSize: '1.25rem',
    backgroundColor: 'transparent',
    color: '#000',
    position: 'absolute',
    left: '100%',
    top: 20,
    bottom: 0,
    transform: 'translateX(-100%)',
    '@media (max-width: 800px)': {
      left: 'calc(100% - 16px)',
    },
  },

  closeButton: {
    margin: 0,
    border: 0,
    width: 35,
    height: 35,
    position: 'relative',
    backgroundColor: 'transparent',
    cursor: 'pointer',

    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      width: 40,
      height: 2,
      left: 0,
      top: '40%',
      background: '#fff',
    },
    '&:before': {
      transform: 'rotate(45deg)',
    },
    '&:after': {
      transform: 'rotate(-45deg)',
    },
  },
});

export const useButtonStyles = createUseStyles(buttonStyles);
