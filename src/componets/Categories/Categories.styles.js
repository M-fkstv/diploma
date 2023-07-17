import { createUseStyles } from 'react-jss';

export const categoriesStyles = {
  root: {
    marginTop: 80,
    marginBottom: 90,
    textAlign: 'center',
    overflow: 'hidden',
    '&:has(h2)': {
      fontSize: 32,
      fontWeight: 500,
    },
  },
  wrapper: {
    backgroundColor: 'white',
    display: 'flex',
    gap: 10,
    width: ' calc(100% / 14 * 12)',
    justifyContent: 'space-between',
    overflowX: 'auto',
  },

  card: {
    display: 'flex',
    minWidth: 196,
    height: 90,
    paddingLeft: 16,
    backgroundColor: '#EDE7F0',
    alignItems: 'center',
    cursor: 'pointer',

    '@media (max-width: 800px)': {
      minWidth: 150,
    },
    '@media (max-width: 360px)': {
      minWidth: 140,
    },
  },

  icon: {
    margin: 0,
    width: 50,
    aspectRatio: '1/1',
    objectFit: 'contain',
    '@media (max-width: 960px)': {
      width: 40,
    },
    '@media (max-width: 360px)': {
      width: 32,
    },
  },

  subtitle: {
    margin: '0 0 0 5px',
    fontSize: '1.5rem',
    '@media (max-width: 800px)': {
      fontSize: '1rem',
    },
  },

  colLg12: {
    width: ' calc(100% / 12 * 10)',
  },

  colLg2: {
    width: ' calc(100% / 12 * 2)',
  },
  cardWrapper: {
    maxWidth: 1240,
    rowGap: 16,
    columnGap: 16,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    '@media (max-width: 1024px)': {
      width: 850,
    },
    '@media (max-width: 768px)': {
      width: 'min(650px, calc(100% - 16px))',
      columnGap: 10,
    },
    '@media (max-width: 430px)': {
      width: 'min(350px, calc(100% - 16px))',
      columnGap: 10,
    },
  },
};

export const useCategoriesStyles = createUseStyles(categoriesStyles);
