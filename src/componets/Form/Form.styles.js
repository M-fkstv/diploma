import { createUseStyles } from 'react-jss';

const formStyles = () => ({
  bcg: {
    backgroundColor: '#BDBDBD',
    display: 'flex',
    width: '100%',
    height: '100%',
    '@media (301px <= width <= 900px)': {
      backgroundColor: '#595656',
    },
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    width: '60%',
    margin: '50px auto 50px auto',
    padding: '80px 100px',
    '@media (901px <= width <= 1200px)': {
      width: '80%',
      padding: '40px 60px',
      margin: '100px auto 100px auto',
    },
    '@media (301px <= width <= 900px)': {
      width: '100%',
      padding: '40px 60px',
      margin: '100px auto 100px auto',
    },
  },

  titleWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    margin: '0 auto 60px 0',
    fontSize: '1.75rem',
    '@media (600px <= width <= 1200px)': {
      fontSize: '1.5rem',
    },
    '@media (320px <= width <= 600px)': {
      fontSize: '1.15rem',
    },
  },
  form: {
    margin: '0 0 30px 0',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 30,
    fontSize: '1.25rem',
    '@media (600px <= width <= 1200px)': {
      fontSize: '1rem',
    },
    '@media (320px <= width <= 600px)': {
      fontSize: '0.75rem',
    },
  },

  closeButton: {
    margin: 0,
    border: 0,
    width: 35,
    height: 35,
    position: 'relative',
    backgroundColor: 'transparent',
    cursor: 'pointer',

    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      width: 40,
      height: 2,
      left: 0,
      top: '40%',
      background: '#000',
    },
    '&:before': {
      transform: 'rotate(45deg)',
    },
    '&:after': {
      transform: 'rotate(-45deg)',
    },
  },

  input: {
    margin: 0,
    height: 35,
    fontSize: '1.25rem',
    border: 'none',
    borderBottom: '2px solid #D8D8D8',
    '&:focus-visible': {
      outline: 'none',
      borderBottom: '2px solid #000F08',
    },
    '@media (600px <= width <= 1200px)': {
      fontSize: '1rem',
    },
    '@media (320px <= width <= 600px)': {
      fontSize: '0.75rem',
    },
  },
  checkboxWrapper: {
    margin: 0,
    display: 'flex',
    fontSize: '1.25rem',
    '& label': {
      marginLeft: 15,
    },
    '@media (600px <= width <= 1200px)': {
      fontSize: '1rem',
    },
    '@media (320px <= width <= 600px)': {
      fontSize: '0.75rem',
    },
  },

  checkbox: {
    margin: 0,
    width: 32,
    height: 32,
    '&:checked': {
      accentColor: '#000000',
    },
  },
  descr: {
    margin: '0 0 40px 0',
    color: 'gray',
    '& a': {
      textDecoration: 'underline',
    },
    '@media (600px <= width <= 1200px)': {
      marginBottom: 30,
    },
    '@media (320px <= width <= 600px)': {
      marginBottom: 20,
    },
  },
});

export const useFormStyles = createUseStyles(formStyles);
