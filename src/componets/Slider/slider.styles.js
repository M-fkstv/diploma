import { createUseStyles } from 'react-jss';

export const useSliderStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    position: 'relative',
    margin: ' 0 auto',
    maxWidth: 1240,
    '@media (0px <= width <= 320px)': {
      maxWidth: 280,
    },
    '@media (321px <= width <= 426px)': {
      maxWidth: 340,
    },
    '@media (426px <= width <= 768px)': {
      maxWidth: 650,
    },
    '@media (769px <= width <= 1200px)': {
      maxWidth: 850,
    },
  },
  buttonNext: {
    position: 'absolute',
    top: 'calc((100% - 40px) / 2)',
    left: ' 100%',
    transform: 'translate(-50%, -50%)',
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
    '@media (max-width: 768px)': {
      left: '100%',
      height: 30,
      width: 30,
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
      '@media (max-width: 768px)': {
        height: 7,
        width: 7,
      },
    },
    // swiperButtonDisabled: {
    //   display: 'none',
    // },
  },

  buttonPrev: {
    position: 'absolute',
    top: 'calc((100% - 40px) / 2)',
    left: '0',
    transform: 'translate(-50%, -50%)',
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
    '@media (max-width: 768px)': {
      left: 0,
      height: 30,
      width: 30,
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
      '@media (max-width: 768px)': {
        height: 7,
        width: 7,
      },
    },
    // composes: '$swiper-button-disabled',
  },
  swiperButtonDisabled: {
    display: 'none',
  },
});
