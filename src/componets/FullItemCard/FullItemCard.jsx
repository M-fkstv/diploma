import React from 'react';
import PropTypes from 'prop-types';
import { useFullItemCardStyles } from './FullItemCard.styles';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Icon } from '../Icons/Icon';
import { Button } from '../Button';
import { Accordion } from '../Accordion';

import { setBag } from '../../store/slices/bag.slice';
import { setFavorites } from '../../store/slices/favorites.slice';

import { dollar } from '../../constants/toDollar';

import { useIconStyles } from '../Icons/Icon/Icon.style';
import { useIndexStyles } from '../../../index.styles';

export const FullItemCard = () => {
  const classes = useFullItemCardStyles();
  const indClasses = useIndexStyles();
  const iconClasses = useIconStyles();
  const { state } = useLocation();
  const dispatch = useDispatch();

  const addToBag = () => {
    dispatch(setBag(state));
  };
  const addToFavorites = () => {
    dispatch(setFavorites(state));
  };

  return (
    <div className={classes.root}>
      <div className={classes.cardWrapper}>
        <img
          className={classes.cardImage}
          id={state.id}
          src={state.images[0]}
          alt={state.name}
        />
        <img
          className={classes.cardImage}
          id={state.id}
          src={state.images[1]}
          alt={state.name}
        />
      </div>
      <div className={classes.cardInfo}>
        <p>{state.name}</p>
        <div className={classes.priceInfo}>
          <p>USD{dollar.format(state.price.value / 100)}</p>
          <p>PRE ORDER</p>
        </div>

        <div className={classes.colorInfo}>
          <p>COLOR</p>
          <div
            className={classes.colorValue}
            style={{ backgroundColor: state.color.name }}></div>
        </div>

        <div className={classes.sizeInfo}>
          <p>SIZE</p>
          <ul className={classes.sizeValue}>
            {state.availableSizes[0].split(',').map((item, index) => (
              <li key={index}>
                <NavLink to="/">{item}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.buttonsBlock}>
          <Button
            title={'ADD TO BAG'}
            className={classes.bagButton}
            onClick={addToBag}
          />
          <button className={classes.wishButton} onClick={addToFavorites}>
            <Icon id="#wishlist" className={iconClasses.root} />
          </button>
        </div>
        <Accordion
          title={'PRODUCT DESCRIPTION'}
          description={state.description}
          id={state.id}
        />
        <Accordion
          title={'SHIPPING & RETURN'}
          description={state.description}
          id={state.id}
        />
        <Accordion
          title={'FABRIC COMPOSITION'}
          description={state.description}
          id={state.id}
        />
      </div>
    </div>
  );
};
