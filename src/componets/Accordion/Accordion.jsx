import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAccordionStyles } from './Accordion.styles';

export const Accordion = ({ title, description }) => {
  const classes = useAccordionStyles();
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div className={classes.accordion}>
      <div className={classes.item}>
        <div className={classes.title} onClick={handleToggle}>
          <span className={classes.plus}>{active ? '-' : '+'}</span>
          <h4>{title}</h4>
        </div>
        <div className={active ? classes.active : classes.hidden}>
          {description}
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
