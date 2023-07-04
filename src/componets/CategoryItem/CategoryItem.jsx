import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from '../../store/slices/favorites.slice';
import { setBag } from '../../store/slices/bag.slice';

import { dollar } from '../../constants/toDollar';
import { useCategoryItemStyles } from './CategoryItem.styles';
import IconButton from '@mui/material/IconButton';
import { useButtonStyles } from '../Button/Button.styles';

export const CategoryItem = (item) => {
  const classes = useCategoryItemStyles();
  const buttonClasses = useButtonStyles();
  const initFavState = useSelector((state) => state.favorites);
  const initBagState = useSelector((state) => state.bag);
  const dispatch = useDispatch();
  const handleAddToFavorites = (e) => {
    e.preventDefault();
    if (!initFavState.find((favItem) => favItem.id === item.id)) {
      dispatch(setFavorites(item));
    }
  };
  const handleAddToBag = (e) => {
    e.preventDefault();
    if (!initBagState.find((bagItem) => bagItem.id === item.id)) {
      dispatch(setBag(item));
    }
  };
  return (
    <figure className={classes.itemWrapper}>
      <Link to={`/item/${item.id}`} state={item}>
        <img
          className={classes.examplesIcon}
          id={item.id}
          src={item.images[0]}
          alt={item.name}
        />
        <div className={classes.hover}>
          <Button
            title="ADD TO BAG"
            className={buttonClasses.hoverButton}
            onClick={handleAddToBag}
          />
        </div>
      </Link>

      <IconButton
        aria-label="add to favorites"
        className={buttonClasses.wishlistButton}
        onClick={handleAddToFavorites}>
        <FavoriteBorderIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <figcaption>
        <p className={classes.price}>{dollar.format(item.price.value / 100)}</p>
      </figcaption>
    </figure>
  );
};

CategoryItem.propTypes = {
  item: PropTypes.object,
};
