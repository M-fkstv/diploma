import { createUseStyles } from 'react-jss';

const fullItemCardStyles = () => ({
  root: {
    display: 'flex',
    maxWidth: '100vw',
    top: 60,
    margin: '100px 0 60px 0',
    '@media (max-width: 800px)': {
      flexDirection: 'column',
    },
  },

  cardWrapper: {
    width: '70%',
    margin: 0,
    '@media (max-width: 800px)': {
      width: '100%',
      padding: '0 16px 0 16px',
    },
  },

  cardInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: '30%',
    padding: '40px',
    fontSize: '1.25rem',
    '& *': {
      marginLeft: 0,
    },
    '@media (max-width: 1200px)': {
      fontSize: '1rem',
      gap: 18,
    },
    '@media (max-width: 800px)': {
      padding: '0 0 0 32px',
      width: '100%',
      gap: 12,
    },
  },

  priceInfo: {
    fontSize: '1rem',
    '& :last-child': {
      marginTop: 10,
      color: '#D8D8D8',
    },
  },

  colorInfo: {
    fontSize: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& p': {
      color: '#8C8C8C',
      marginBottom: 10,
    },
  },

  colorValue: {
    margin: 0,
    width: 30,
    height: 30,
    border: '2px solid',
  },
  sizeInfo: {
    '& p': {
      fontSize: '1rem',
      color: '#8C8C8C',
    },
  },

  sizeValue: {
    fontSize: '1rem',
    display: 'flex',
    paddingLeft: 0,
    gap: 8,
    width: 'max-content',
    '& li': {
      textAlign: 'center',
      listStyle: 'none',
      width: 20,
      '& a:hover': {
        textDecoration: 'underline',
        textUnderlineOffset: '4px', //??
      },
    },
  },

  cardImage: {
    width: '50%',
    objectFit: 'contain',
    marginBottom: 60,
  },

  buttonsBlock: {
    display: 'flex',
    width: '100%',
    '@media (max-width: 800px)': {
      width: '40%',
    },
    '@media (max-width: 600px)': {
      width: '50%',
    },
  },

  bagButton: {
    cursor: 'pointer',
    width: '79%',
    color: '#ffffff',
    backgroundColor: '#000000',
    fontSize: '1.25rem',
    '@media (max-width: 1200px)': {
      fontSize: '1rem',
      width: '70%',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.75rem',
    },
  },

  wishButton: {
    cursor: 'pointer',
    width: '20%',
    backgroundColor: '#000000',
    padding: 5,
    color: '#ffffff',
    marginBottom: 0,
    '@media (max-width: 1200px)': {
      width: '29%',
    },
  },
});

export const useFullItemCardStyles = createUseStyles(fullItemCardStyles);
