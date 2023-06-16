import { createUseStyles } from 'react-jss';
import { discount } from '../ItemCard';
// import { animationColor, generalBlue } from '../../index.styles';

export const salesStyles = () => ({
  root: {
    // backgroundColor: theme.palette.primary.backgroundColor,
    paddingTop: 120,
    paddingBottom: 120,
  },

  sectionTitle: {
    position: 'relative',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 500,
    margin: '0 auto 106px',
    // color: theme.palette.primary.sectionTitletext,
  },

  examples: {
    position: 'relative',
    maxWidth: 1240,
    gap: 16,
    display: 'flex',
    justifyContent: 'center',
    margin: '106px auto 0',
    flexWrap: 'wrap',
    '@media (max-width: 360px)': {
      padding: 12,
    },
  },

  hover: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    inset: 0,
    height: 'calc(100% - 24px)',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.25)',
      transition: 'opacity 200ms linear',
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
  wishlistButton: {
    position: 'absolute',
    top: '5%',
    left: '80%',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 0,
  },

  examplesIcons: {
    // width: 300,
    // height: 400,
    margin: '0 auto',
    overflow: 'hidden',
    '&:before': {
      position: 'absolute',
      paddingLeft: 12,
      width: 40,
      height: 20,
      bottom: 24,
      left: 0,
      backgroundColor: 'red',
      content: ` ${discount}`,
      zIndex: 2,
    },
  },

  examplesIcon: {
    position: 'relative',
    width: 296,
    aspectRatio: '2/3',
  },

  description: {
    height: 20,
    display: 'inline-flex',
    gap: 8,
    marginLeft: 8,
  },

  descriptionText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    fontWeight: 400,

    '&:nth-child(1)': {
      textDecoration: 'line-through',
      color: 'red',
    },
    // '&:nth-child(3)': {
    //   backgroundColor: 'red',
    //   position: 'absolute',
    //   color: '#fff',
    //   width: 30,
    //   top: '90.5%',
    //   left: 0,
    // },
  },
});

export const useSalesStyles = createUseStyles(salesStyles);
