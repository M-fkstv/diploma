import { createUseStyles } from 'react-jss';

export const useSliderStyles = createUseStyles({
  wrapper: {
    position: 'relative',
    margin: ' 0 auto',
    maxWidth: 1232,
  },
  buttonNext: {
    position: 'absolute',
    top: '46%',
    left: ' 100%',
    transform: 'translate(-50%)',
    height: 40,
    width: 40,
    borderRadius: '50%',
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    padding: 10,
    cursor: 'pointer',
    zIndex: 100,
    '&:active': {
      scale: 1.1,
    },
    '@media (max-width: 360px)': {
      left: '97%',
    },

    '&:before': {
      content: '""',
      position: 'absolute',
      height: 10,
      width: 10,
      border: '2px solid #10367c',
      borderRight: 0,
      borderTop: 0,
      top: '35%',
      left: '35%',
      zIndex: 2,
      transform: 'rotate(235deg) skew(20deg)',
    },
  },

  buttonPrev: {
    position: 'absolute',
    top: '46%',
    left: '0',
    transform: 'translate(-50%)',
    height: 40,
    width: 40,
    borderRadius: '50%',
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    padding: 10,
    cursor: 'pointer',
    zIndex: 2,
    '&:active': {
      scale: 1.1,
    },
    '@media (max-width: 360px)': {
      left: '3%',
    },

    '&:before': {
      content: '""',
      position: 'absolute',
      height: 10,
      width: 10,
      border: '2px solid #10367c',
      borderRight: 0,
      borderTop: 0,
      top: '35%',
      left: '40%',
      zIndex: 100,
      transform: 'rotate(55deg) skew(20deg)',
    },
  },
});
