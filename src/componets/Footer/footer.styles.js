import { createUseStyles } from 'react-jss';

const footerStyles = () => ({
  root: {
    margin: '0 auto',
    maxWidth: 1240,
  },
  header: {
    textAlign: 'center',
    '& $p': {
      marginBottom: 40,
      fontSize: '1rem',
    },
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 400,
    color: '#000F08',
    marginBottom: 24,
  },

  subTitle: {
    fontSize: '1.5rem',
    fontWeight: 400,
    color: '#000F08',
    marginBottom: 40,
    '@media (max-width: 900px)': {
      fontSize: '1rem',
      marginBottom: 0,
      marginLeft: 10,
    },
  },
  body: {
    maxWidth: 1240,
    justifyContent: 'space-between',
    display: 'flex',
    margin: '0 auto',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
    },
    '& $ul': {
      paddingInlineStart: 0,
      marginLeft: 0,
    },
    '& $li, $li a': {
      fontSize: '1rem',
      color: '#000F08',
      marginBottom: 20,
      cursor: 'pointer',
    },
  },
  signUp: {
    margin: '60px auto',
    position: 'relative',
    width: 400,
  },
  signUpTextField: {
    width: '100%',
    fontSize: '1.25rem',
    border: 'none',
    color: '#8C8C8C',
    borderBottom: '2px solid #8C8C8C',
    '&:focus-visible': {
      outline: 'none',
      borderBottom: '2px solid #000F08',
    },
  },
  signUpButton: {
    border: 'none',
    fontSize: '1.25rem',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    position: 'absolute',
    left: '100%',
    transform: 'translateX(-100%)',
  },
  accordion: {
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    backGroundColor: '#ffffff',
    '@media (max-width: 900px)': {
      paddingLeft: 16,
    },
  },
});
export const useFooterStyles = createUseStyles(footerStyles);
