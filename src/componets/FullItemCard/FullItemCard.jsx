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

export const FullItemCard = () => {
  const classes = useFullItemCardStyles();
  const { item } = useLocation();
  const dispatch = useDispatch();
  const initFavState = useSelector((state) => state.favorites);
  const initBagState = useSelector((state) => state.bag);

  const handleAddToBag = (e) => {
    e.preventDefault();
    if (!initBagState.find((bagItem) => bagItem.id === item.id)) {
      dispatch(setBag(item));
    }
  };

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    if (!initFavState.find((favItem) => favItem.id === item.id)) {
      dispatch(setFavorites(item));
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.cardWrapper}>
        <img
          className={classes.cardImage}
          id={item.id}
          src={item.images[0]}
          alt={item.name}
        />
        <img
          className={classes.cardImage}
          id={item.id}
          src={item.images[1]}
          alt={item.name}
        />
      </div>
      <div className={classes.cardInfo}>
        <p>{item.name}</p>
        <div className={classes.priceInfo}>
          <p>USD{dollar.format(item.price.value / 100)}</p>
          <p>PRE ORDER</p>
        </div>

        <div className={classes.colorInfo}>
          <p>COLOR</p>
          <div
            className={classes.colorValue}
            style={{ backgroundColor: item.color.hex }}></div>
        </div>

        <div className={classes.sizeInfo}>
          <p>SIZE</p>
          <ul className={classes.sizeValue}>
            {item.availableSizes[0].split(',').map((item, index) => (
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
            description={item.description}
            id={item.id}
          />
          <Accordion
            title={'SHIPPING & RETURN'}
            description={item.description}
            id={item.id}
          />
          <Accordion
            title={'FABRIC COMPOSITION'}
            description={item.description}
            id={item.id}
          />
        </div>
      </div>
    </div>
  );
};
