import { createUseStyles } from 'react-jss';

const headerStyles = (theme) => ({
  root: {
    position: 'absolute',
    zIndex: 1,
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
    fontSize: 18,
    // '& svg ': {
    //   fucking svg color: 108, TODO !!!!!
    // },
  },
  headerLink: {
    composes: '$menuLink',
    color: theme.palette.primary.mainText,
    '& span': {
      fontSize: 18,
    },
  },
  asideLink: {
    composes: '$menuLink',
    color: '#000',
  },
});

export const useHeaderStyles = createUseStyles(headerStyles);
