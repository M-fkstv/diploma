import { createUseStyles } from 'react-jss';
import { discount } from '../ItemCard';

const itemCardStyles = () => ({
  examplesIcons: {
    width: 296,
    margin: '0 auto',
    overflow: 'hidden',
    '&:before': {
      position: 'absolute',
      paddingLeft: 12,
      width: 40,
      height: 20,
      bottom: 40,
      left: 1,
      backgroundColor: '#D7302D',
      content: ` ${discount}`,
      zIndex: 2,
    },
  },

  examplesIcon: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'relative',
    // width: 296,
    // // aspectRatio: '2/3',
  },

  hover: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0,
    height: 'calc(100% - 40px)',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.25)',
      opacity: 1,
      transition: 'opacity 200ms linear',
    },
  },
  description: {
    height: 20,
    display: 'inline-flex',
    gap: 12,
    marginLeft: 8,
    marginTop: 20,
  },

  descriptionText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1rem',
    fontWeight: 400,
    '&:nth-child(1)': {
      textDecoration: 'line-through',
      color: '#000F08',
    },
    '&:nth-child(2)': {
      color: '#D7302D',
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

export const useItemCardStyles = createUseStyles(itemCardStyles);
