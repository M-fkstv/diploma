import React from 'react';
import { useTopSectionStyles } from './TopSection.styles';
import './TopSection.css';
import { Button } from '../Button';
import { useButtonStyles } from '../Button/Button.styles';

export const TopSection = () => {
  const classes = useTopSectionStyles();
  const buttonClasses = useButtonStyles();
  return (
    <div className="wrapper">
      <div className={classes.content}>
        <h1>NEW COLLECTION</h1>
        <p>
          Our easiest chuck-on-and-go staples come with a serious style heritage
          <br />
          that's liberating, sexy, comfy and supremely cool
        </p>
        <Button
          className={buttonClasses.topSectionButton}
          title={'SHOP NEW ARRIVALS'}
        />
      </div>
    </div>
  );
};
