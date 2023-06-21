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
    width: '30%',
    padding: '40px',
    fontSize: '1.25rem',
    '& *': {
      marginLeft: 0,
    },
    '@media (max-width: 800px)': {
      width: '100%',
    },
  },

  priceInfo: {
    marginTop: 20,
    marginBottom: 30,
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
    marginTop: 20,
    marginBottom: 40,
  },

  sizeValue: {
    fontSize: '1rem',
    display: 'flex',
    paddingLeft: 0,
    width: 'max-content',
    // '& li &:hover': { // TODO hover
    //   textDecoration: 'underline',
    // },
    '& li': {
      textAlign: 'center',
      listStyle: 'none',
      width: 20,
    },
  },

  cardImage: {
    width: '50%',
    objectFit: 'contain',
    marginBottom: 60,
  },

  buttonsBlock: {
    display: 'flex',
    marginBottom: 30,
    '@media (max-width: 800px)': {
      width: '40%',
    },
  },

  bagButton: {
    cursor: 'pointer',
    width: '79%',
    color: '#ffffff',
    backgroundColor: '#000000',
    fontSize: '1.5rem',
    '@media (max-width: 800px)': {
      fontSize: '1rem',
    },
  },

  wishButton: {
    cursor: 'pointer',
    width: '20%',
    backgroundColor: '#000000',
    padding: 5,
    color: '#ffffff',
    marginBottom: 0,
  },
});

export const useFullItemCardStyles = createUseStyles(fullItemCardStyles);
