import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { Accordion } from '../Accordion';
import { Button } from '../Button';

import { setBag } from '../../store/slices/bag.slice';
import { setFavorites } from '../../store/slices/favorites.slice';

import { dollar } from '../../constants/toDollar';

import { useFullItemCardStyles } from './FullItemCard.styles';

const FullItemCard = () => {
  const classes = useFullItemCardStyles();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const initFavState = useSelector((state) => state.favorites);

  const handleAddToBag = (e) => {
    e.preventDefault();

    dispatch(setBag(state));
  };

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    if (!initFavState.find((favItem) => favItem.id === state.id)) {
      dispatch(setFavorites(state));
    }
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
            style={{ backgroundColor: state.color.hex }}></div>
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
            onClick={handleAddToBag}
          />
          <Button className={classes.wishButton} onClick={handleAddToFavorites}>
            <FavoriteBorderIcon />
          </Button>
        </div>
        <div>
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
    </div>
  );
};

export default FullItemCard;
