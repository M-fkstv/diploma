import { createUseStyles } from 'react-jss';

const instaBoxStyles = () => ({
  root: {
    padding: '90px 0',
    maxWidth: 1240,
  },
  parent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(6, 1fr)',
    gridColumnGap: 0,
    gridRowGap: 0,
    marginTop: 10,
    '@media (300px <= width <= 900px)': {
      display: 'grid',
      gridAutoRows: '1fr',
      gridTemplateColumns: '100%',
      // gridTemplateRows: '600px 600px 600px 600px 600px',
      // gridTemplateRows: '100%',
      gridTemplateRows: 'repeat(5, 1fr)',
    },
  },

  image: {
    width: '100%',
    // height: '100%',
    objectFit: 'cover',
    aspectRatio: '1/1',
  },

  div1: {
    gridArea: '1 / 1 / 7 / 7',
    '@media (300px <= width <= 900px)': {
      gridArea: '1 / 1 / 2 / 2',
    },
  },
  div2: {
    gridArea: '1 / 7 / 4 / 10',
    '@media (300px <= width <= 900px)': {
      marginTop: -4,
      gridArea: '2 / 1 / 3 / 2',
    },
  },
  div3: {
    gridArea: '1 / 10 / 4 / 13',
    '@media (300px <= width <= 900px)': {
      marginTop: -4,
      gridArea: '3 / 1 / 4 / 2',
    },
  },
  div4: {
    marginTop: -4,
    gridArea: '4 / 7 / 7 / 10',
    '@media (300px <= width <= 900px)': {
      gridArea: '4 / 1 / 6 / 2',
    },
  },
  div5: {
    marginTop: -4,
    gridArea: '4 / 10 / 7 / 13',
    '@media (300px <= width <= 900px)': {
      gridArea: '5 / 1 / 5 / 2',
    },
  },
});

export const useInstaBoxStyles = createUseStyles(instaBoxStyles);
