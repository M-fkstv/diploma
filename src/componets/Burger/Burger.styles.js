import { createUseStyles } from 'react-jss';

const burgerStyles = () => ({
  '@global': {
    a: {
      color: '#000000',
      display: 'flex',
    },
    button: {
      color: '#000000',
    },
  },
});

export const useBurgerStyles = createUseStyles(burgerStyles);
