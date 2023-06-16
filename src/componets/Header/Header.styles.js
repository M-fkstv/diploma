import { createUseStyles } from 'react-jss';

const headerStyles = (theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    width: '100%',
    display: 'flex',
    padding: '20px 80px 0 80px',
    justifyContent: 'space-between',
    '@media (max-width: 1200px)': {
      padding: '20px 20px 0 20px',
    },
  },
  title: {
    position: 'absolute',
    top: '1rem',
    left: '50%',
    transform: 'translate(-50%)',
    color: theme.palette.primary.sectionTitleText,
    fontSize: 32,
  },

  menuLeft: {
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 40,
    '@media (max-width: 1200px)': {
      '& :not(:first-child)': {
        display: 'none',
      },
    },
  },
  menuRight: {
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 40,
    '@media (max-width: 1200px)': {
      '& :nth-child(2)': {
        display: 'none',
      },
      '& :nth-child(3) span': {
        display: 'none',
      },
    },
    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
  menuLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.primary.mainText,
    fontSize: 18,
    '@media (max-width: 600px)': {
      color: '#000',
    },
    // '& svg ': {
    //   fucking svg color: 108, TODO !!!!!
    // },
  },
  headerBtn: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.mainText,
    fontSize: 18,
    backgroundColor: ' transparent',
    border: 0,
    cursor: 'pointer',
    '& span': {
      marginRight: 5,
    },
  },
});

export const useHeaderStyles = createUseStyles(headerStyles);
