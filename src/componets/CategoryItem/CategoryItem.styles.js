import { createUseStyles } from 'react-jss';

const categoryItemStyles = () => ({
  examplesIcon: {
    width: '100%',
  },

  itemWrapper: {
    position: 'relative',
    aspectRatio: '2/3',
    textAlign: 'left',
    width: 'calc(25% - 16px)',
    '@media (max-width: 1024px)': {
      width: 'calc(33% - 10px)',
    },
    '@media (max-width: 768px)': {
      width: 'min(650px, calc(50% - 10px))',
      columnGap: 10,
    },
    // '@media (max-width: 430px)': {
    //   width: 'min(350px, calc(100% - 16px))',
    //   columnGap: 10,
    // },
  },
  price: {
    fontSize: '1rem',
    height: 20,
  },

  hover: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 24,
    opacity: 0,
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.25)',
      opacity: 1,
      transition: 'opacity 200ms linear',
    },
  },
});

export const useCategoryItemStyles = createUseStyles(categoryItemStyles);
