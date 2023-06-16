import { createUseStyles } from 'react-jss';

const formStyles = () => ({
  bcg: {
    backgroundColor: '#BDBDBD',
    padding: '100px 150px',
    width: '100%',
    height: '100%',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    width: '60%',
    // height: 1125,
    padding: '80px 100px',
  },
  title: {
    margin: '0 auto 60px 0',
    fontSize: '1.5rem',
  },
  form: {
    margin: '0 0 30px 0',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
  },
  input: {
    margin: 0,
    height: 35,
    border: 'none',
    borderBottom: '2px solid #000000',
    '&:focus-visible': {
      outline: 'none',
      borderBottom: '2px solid #000F08',
    },
  },
  checkboxWrapper: {
    margin: 0,
    display: 'flex',
    fontSize: '1rem',
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
  },
});

export const useFormStyles = createUseStyles(formStyles);
