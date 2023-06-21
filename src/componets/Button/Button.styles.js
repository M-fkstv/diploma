import { createUseStyles } from 'react-jss';

const buttonStyles = (theme) => ({
  formButton: {
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: '#000000',
    fontSize: '1.25rem',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
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
    color: theme.palette.primary.mainText,
    fontSize: 18,
    backgroundColor: ' transparent',
    border: 0,
    cursor: 'pointer',
    '& span': {
      marginRight: 5,
    },
    '@media (max-width: 1200px)': {
      color: '#000',
    },
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
  },

  wishlistButton: {
    position: 'absolute',
    top: '5%',
    left: '80%',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 0,
    '&:hover  ': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    opacity: 0,
    cursor: 'pointer',
    '&:hover': {
      opacity: 1,
      transition: 'opacity 200ms linear',
    },
    '&:active': {
      scale: 0.8,
    },
  },
});

export const useButtonStyles = createUseStyles(buttonStyles);
