import { createUseStyles } from 'react-jss';

export const categoriesStyles = {
  root: {
    marginTop: 80,
    marginBottom: 90,
    textAlign: 'center',
    '&:has(h2)': {
      fontSize: 32,
      fontWeight: 500,
    },
  },
  wrapper: {
    backgroundColor: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    maxWidth: 1240,
    width: ' calc(100% / 14 * 12)',
    justifyContent: 'space-between',
    '@media (max-width: 1200px)': {
      width: ' calc(100% / 14 * 9)',
    },
    '@media (max-width: 600px)': {
      width: ' calc(100% / 14 * 12)',
    },
  },

  card: {
    display: 'flex',
    width: 196,
    height: 90,
    paddingLeft: 16,
    backgroundColor: '#EDE7F0',
    alignItems: 'center',
    cursor: 'pointer',

    '@media (max-width: 800px)': {
      width: 150,
    },
    '@media (max-width: 360px)': {
      width: 140,
    },
  },

  icon: {
    margin: 0,
    maxWidth: 50,
    aspectRatio: '1/1',
    objectFit: 'contain',
    '@media (max-width: 800px)': {
      maxWidth: 40,
    },
    '@media (max-width: 360px)': {
      maxWidth: 32,
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
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
};

export const useCategoriesStyles = createUseStyles(categoriesStyles);
