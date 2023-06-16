import { createUseStyles } from 'react-jss';

const iconStyles = (theme) => ({
  root: {
    width: 28,
    height: 25,
  },
  like: {
    width: 35,
    height: 35,
  },
  bagIcon: {
    width: 28,
    height: 25,
    display: 'none',
    '@media (max-width: 1200px)': {
      display: 'block',
    },
  },
  burgerIcon: {
    width: 28,
    height: 25,
    display: 'none',
    color: theme.palette.primary.mainText,
    '@media (max-width: 1200px)': {
      display: 'block',
    },
  },

  footerIcon: {
    height: '1rem',
    width: '1rem',
    marginRight: 8,
  },

  dress: {
    width: 30,
    height: 50,
  },
  payment: {
    width: 65,
    height: 35,
    cursor: 'pointer',
  },
});

export const useIconStyles = createUseStyles(iconStyles);
