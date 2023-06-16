import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '../Icons/Icon';

import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from '../../store/slices/favorites.slice';
import { setBag } from '../../store/slices/bag.slice';

import { dollar } from '../../constants/toDollar';
import { useCategoryItemStyles } from './CategoryItem.styles';
import { useIconStyles } from '../Icons/Icon/Icon.style';
export const CategoryItem = (item) => {
  const classes = useCategoryItemStyles();
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
    <div className={classes.itemWrapper}>
      <Link to={`item/:id${item.id}`} state={item}>
        <img
          className={classes.examplesIcon}
          id={item.id}
          src={item.images[0]}
          alt={item.name}
        />
        <div className={classes.hover}>
          <button className={classes.hoverButton} onClick={addToBag}>
            ADD TO BAG
          </button>
        </div>
      </Link>
      <button className={classes.wishlistButton} onClick={addToFavorites}>
        <Icon id="#like" className={iconClasses.like} />
      </button>
      <p className={classes.price}>{dollar.format(item.price.value / 100)}</p>
    </div>
  );
};
