import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { dollar } from '../../constants/toDollar';

import { setBag } from '../../store/slices/bag.slice';
import {
  removeFavorites,
  setFavorites,
} from '../../store/slices/favorites.slice';

import { Button } from '../Button';
import { useButtonStyles } from '../Button/Button.styles';
import { useItemCardStyles } from './ItemCard.styles';
import { useWideScreen } from '../../constants/isWideScreen';

export const discount = '"25%"';

export const ItemCard = (item) => {
  const classes = useItemCardStyles();
  const buttonClasses = useButtonStyles();
  const initFavState = useSelector((state) => state.favorites);
  const favoritesState = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const isWideScreen = useWideScreen();

  const isInFav = (id) => {
    if (initFavState.find((favItem) => favItem.id === id)) {
      return true;
    }
  };

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    if (!initFavState.find((favItem) => favItem.id === item.id)) {
      dispatch(setFavorites(item));
    } else {
      const toDispatch = favoritesState.filter(
        (favItem) => favItem.id !== item.id,
      );
      dispatch(removeFavorites(toDispatch));
    }
  };

  const handleAddToBag = (e) => {
    e.preventDefault();
    dispatch(setBag(item));
  };

  return (
    <figure className={classes.examplesIcons}>
      <Link to={`item/${item.id}`} state={item}>
        <img
          className={classes.examplesIcon}
          id={item.id}
          src={item.images[0]}
          alt={item.name}
        />
        <div className={classes.hover}>
          <Button
            className={buttonClasses.hoverButton}
            onClick={handleAddToBag}
            title=" ADD TO BAG"
          />
        </div>
      </Link>

      <IconButton
        aria-label="add to favorites"
        className={
          isInFav(item.id)
            ? buttonClasses.wishlistButton1
            : buttonClasses.wishlistButton
        }
        onClick={handleAddToFavorites}>
        <FavoriteBorderIcon sx={{ fontSize: isWideScreen ? 40 : 24 }} />
      </IconButton>
      <figcaption className={classes.description}>
        <p className={classes.descriptionText}>
          {dollar.format(item.price.value / 100)}
        </p>
        <p className={classes.descriptionText}>
          {dollar.format(Math.floor((item.price.value * 0.75) / 100))}
        </p>
      </figcaption>
    </figure>
  );
};

ItemCard.propTypes = {
  // id: PropTypes.string,
  // name: PropTypes.string,
  // images: PropTypes.array,
  item: PropTypes.object,
};
