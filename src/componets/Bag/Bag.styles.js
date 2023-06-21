import { createUseStyles } from 'react-jss';

const bagStyles = () => ({
  root: {
    margin: '150px auto',
    width: '50%',
    // aspectRatio: '1/1',
    '@media (max-width: 800px)': {
      width: '80%',
      aspectRatio: '1/1',
    },
  },
  title: {
    marginLeft: 0,
    fontSize: '1.5rem',
    marginBottom: 16,
    '@media (max-width: 800px)': {
      fontSize: '1.25rem',
    },
    '& span': {
      marginLeft: 10,
      fontSize: '1rem',
      color: '#8C8C8C',
    },
  },
  cardWrapper: {
    position: 'relative',
  },

  card: {
    display: 'flex',
    margin: '20px auto 100px auto',
  },
  cardImage: {
    width: 'calc(100% / 14 * 6)',
    margin: 0,
  },
  cardInfo: {
    marginLeft: 20,
    '& p': {
      marginBottom: 20,
    },
    '& :first-child': {
      marginTop: 20,
      fontSize: '1.25rem',
      fontWeight: 400,
      '@media (max-width: 800px)': {
        fontSize: '1rem',
      },
    },
    '& :nth-child(2)': {
      marginBottom: 40,
    },
  },

  removeButton: {
    cursor: 'pointer',
    position: 'absolute',
    bottom: '5%',
    right: 0,
    border: 0,
    fontSize: 16,
    padding: 4,
    backgroundColor: 'transparent',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      width: 20,
      height: 1,
      left: '-40%',
      top: '40%',
      background: 'gray',
    },
    '&:before': {
      transform: 'rotate(45deg)',
    },
    '&:after': {
      transform: 'rotate(-45deg)',
    },
  },
  bagButton: {
    cursor: 'pointer',
    color: '#ffffff',
    backgroundColor: '#000000',
    fontSize: '1.25rem',
    padding: '10px 20px',
    minWidth: 300,
    '@media (max-width: 800px)': {
      fontSize: '1rem',
    },
  },
  amount: {
    display: 'flex',
    flexDirection: 'column',
    margin: '50px auto',
    gap: 20,
    '& :first-child': {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
  },
});

export const useBagStyles = createUseStyles(bagStyles);
