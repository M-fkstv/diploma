import { createUseStyles } from 'react-jss';

const modalMaskStyles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100vh',
    width: '100%',
    padding: '150px 100px 0 350px',
    backgroundColor: '#E5E5E5',
    position: 'fixed',
    zIndex: 2,
    top: 0,
    left: 0,
    '@media (max-width: 1000px)': {
      paddingLeft: 150,
    },
    '@media (max-width: 600px)': {
      paddingLeft: 50,
    },
  },

  textField: {
    width: '90%',
    height: 30,
    border: 0,
    margin: 0,
    color: '#fff',
    fontSize: 25,
    backgroundColor: '#E5E5E5',
    borderBottom: '2px solid #fff',
    '&:focus-visible': {
      outline: 'none',
    },
    '&::placeholder': {
      color: '#fff',
    },
    '@media (max-width: 600px)': {
      fontSize: 16,
    },
  },
});

export const useModalMaskStyles = createUseStyles(modalMaskStyles);
