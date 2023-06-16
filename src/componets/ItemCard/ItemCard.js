import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Icon } from '../Icons/Icon';

import { dollar } from '../../constants/toDollar';

import { setFavorites } from '../../store/slices/favorites.slice';
import { setBag } from '../../store/slices/bag.slice';

import { useIconStyles } from '../Icons/Icon/Icon.style';
import { useSalesStyles } from '../Sales/sales.styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

export const discount = '"25%"';
export const ItemCard = (item) => {
  const classes = useSalesStyles();
  const iconClasses = useIconStyles();
  const initFavState = useSelector((state) => state.favorites);
  const initBagState = useSelector((state) => state.bag);
  const dispatch = useDispatch();
  const addToFavorites = (e) => {
    e.preventDefault();
    if (!initFavState.find((favItem) => favItem.id === item.id)) {
      dispatch(setFavorites(item));
    }
  };
  const addToBag = (e) => {
    e.preventDefault();
    if (!initBagState.find((bagItem) => bagItem.id === item.id)) {
      dispatch(setBag(item));
    }
  };

  return (
    <div className={classes.examplesIcons}>
      <Link to={`item/:id=${item.id}`} state={item}>
        <img
          className={classes.examplesIcon}
          id={item.id}
          src={item.images[0]}
          alt={item.name}
        />{' '}
        <div className={classes.hover}></div>
      </Link>
      <button className={classes.hoverButton} onClick={addToBag}>
        ADD TO BAG
      </button>

      <IconButton
        aria-label="add to favorites"
        className={classes.wishlistButton}
        onClick={addToFavorites}>
        <FavoriteBorderIcon fontSize="large" sx={{ fill: 'white' }} />
      </IconButton>
      {/*<button className={classes.wishlistButton} onClick={addToFavorites}>*/}
      {/*  /!*<Icon id="#like" className={iconClasses.like} />*!/*/}
      {/*  <FavoriteBorderIcon fontSize="large" sx={{ fill: 'white' }} />*/}
      {/*</button>*/}
      <div className={classes.description}>
        <p className={classes.descriptionText}>
          {dollar.format(item.price.value / 100)}
        </p>
        <p className={classes.descriptionText}>
          {dollar.format(Math.floor((item.price.value * 0.75) / 100))}
        </p>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  // id: PropTypes.string,
  // name: PropTypes.string,
  // images: PropTypes.array,
  item: PropTypes.object,
};
