import { createUseStyles } from 'react-jss';

const accordionStyles = () => ({
  accordionWrapper: {},

  accordion: {
    width: 300,
  },

  item: {
    marginBottom: 20,
  },

  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    cursor: 'pointer',
    '& span': {
      margin: 0,
      width: 10,
    },
    '& h4': {
      marginLeft: 20,
    },
  },

  active: {
    color: '#8C8C8C',
    height: 'auto',
    maxHeight: 500,
    paddingLeft: 30,
    marginTop: 16,
    transition: 'height 0.5s ease-out',
  },

  hidden: {
    color: '#8C8C8C',
    maxHeight: 0,
    paddingLeft: 30,
    overflow: 'hidden',
    transition: 'all 0.5s ease-out',
  },
  // plus: {
  //   margin: 0,
  // },
});

export const useAccordionStyles = createUseStyles(accordionStyles);
