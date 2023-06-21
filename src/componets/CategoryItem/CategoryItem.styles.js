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
});

export const useCategoryItemStyles = createUseStyles(categoryItemStyles);
