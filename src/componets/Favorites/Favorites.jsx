import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../Button';
import { Icon } from '../Icons/Icon';

import {
  clearFavorites,
  removeFavorites,
} from '../../store/slices/favorites.slice';
import { setBag } from '../../store/slices/bag.slice';

import { dollar } from '../../constants/toDollar';

import { useFavoritesStyles } from './Favorites.styles';
import { useIconStyles } from '../Icons/Icon/Icon.style';
import { useIndexStyles } from '../../../index.styles';

export const Favorites = () => {
  const classes = useFavoritesStyles();
  const indClasses = useIndexStyles();
  const iconClasses = useIconStyles();
  const favoritesState = useSelector((state) => state.favorites);
  const bagState = useSelector((state) => state.bag);
  const favSumm = favoritesState.reduce((acc, currentValue) => {
    acc += +currentValue.price.value;
    return acc;
  }, 0);
  const dispatch = useDispatch();

  const deleteFromFavorites = (item) => {
    const toDispatch = favoritesState.filter(
      (bagItem) => bagItem.id !== item.id,
    );
    dispatch(removeFavorites(toDispatch));
  };
  const addToBag = (item) => {
    if (!bagState.find((bagItem) => bagItem.id === item.id)) {
      dispatch(setBag(item));
      dispatch(
        removeFavorites(
          favoritesState.filter((bagItem) => bagItem.id !== item.id),
        ),
      );
    }
  };
  const allToBag = () => {
    favoritesState.forEach((item) => {
      dispatch(setBag(item));
    });
    dispatch(clearFavorites());
  };

  return (
    <article className={classes.root}>
      <p className={classes.title}>
        FAVORITES <span>{favoritesState.length} items</span>
      </p>
      <hr />
      {favoritesState.map((item, index) => {
        return (
          <div key={index} className={classes.cardWrapper}>
            <div className={classes.card}>
              <img
                className={classes.cardImage}
                id={item.id}
                src={item.images[0]}
                alt={item.name}
              />
              <div className={classes.cardInfo}>
                <p>{item.name}</p>
                <p>
                  {item.price.currency}
                  {dollar.format(item.price.value / 100)}
                </p>
                <p>COLOR: {item.color.name}</p>
                <p>SIZE: {item.availableSizes}</p>
                <p>quantity</p>
              </div>
            </div>
            <button
              className={classes.removeButton}
              onClick={() => deleteFromFavorites(item)}>
              REMOVE
            </button>
            <button className={classes.addToBag} onClick={() => addToBag(item)}>
              ADD TO BAG
            </button>
            <hr />
          </div>
        );
      })}
      <div className={classes.amount}>
        <h2>TOTAL USD {dollar.format(favSumm / 100)}</h2>
        <Button
          title={'ALL TO BAG'}
          className={classes.favButton}
          onClick={allToBag}
        />
        <div>
          <Icon id="#visa" className={iconClasses.payment} />
          <Icon id="#maestro" className={iconClasses.payment} />
        </div>
      </div>
    </article>
  );
};
