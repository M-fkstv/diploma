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
  },

  card: {
    // width: '100%',
    display: 'flex',
    width: 196,
    height: 90,
    paddingLeft: 16,
    backgroundColor: '#EDE7F0',
    alignItems: 'center',
    cursor: 'pointer',
  },

  icon: {
    margin: 0,
    maxWidth: 50,
    aspectRatio: '1/1',
    objectFit: 'contain',
  },

  subtitle: {
    margin: '0 0 0 5px',
    fontSize: 24,
  },

  colLg12: {
    width: ' calc(100% / 12 * 10)',
  },

  colLg2: {
    width: ' calc(100% / 12 * 2)',
  },
  cardWrapper: {
    maxWidth: 1240,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
};

export const useCategoriesStyles = createUseStyles(categoriesStyles);
