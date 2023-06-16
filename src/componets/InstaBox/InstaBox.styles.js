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
  },

  image: {
    width: '100%',
    // height: '100%',
    objectFit: 'cover',
    aspectRatio: '1/1',
  },

  div1: {
    gridArea: '1 / 1 / 7 / 7',
  },
  div2: {
    gridArea: '1 / 7 / 4 / 10',
  },
  div3: {
    gridArea: '1 / 10 / 4 / 13',
  },
  div4: {
    marginTop: -4,
    gridArea: '4 / 7 / 7 / 10',
  },
  div5: {
    marginTop: -4,
    gridArea: '4 / 10 / 7 / 13',
  },
});

export const useInstaBoxStyles = createUseStyles(instaBoxStyles);
