import { createUseStyles } from 'react-jss';

const categoryItemStyles = () => ({
  examplesIcon: {
    width: 296,
  },

  itemWrapper: {
    position: 'relative',
    aspectRatio: '2/3',
    // overflow: 'hidden',
    textAlign: 'left',
  },
  price: {
    fontSize: 16,
    height: 20,
  },

  hover: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 28,
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
  },
  wishlistButton: {
    position: 'absolute',
    top: '5%',
    left: '80%',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 0,
  },
});

export const useCategoryItemStyles = createUseStyles(categoryItemStyles);
