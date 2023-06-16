import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'react-jss';

import { Icon } from '../Icons/Icon';
import { ModalMask } from '../Modal';

import { useHeaderStyles } from './Header.styles';
import { useIconStyles } from '../Icons/Icon/Icon.style';
import { removeUser } from '../../store/slices/user.slice';
import { clearBag } from '../../store/slices/bag.slice';
import { clearCategory } from '../../store/slices/category.slice';
import { clearFavorites } from '../../store/slices/favorites.slice';
import { clearSearchResult } from '../../store/slices/search.slice';
import { Button } from '../Button';
import { useButtonStyles } from '../Button/Button.styles';

import DrawerAppBar from '../Burger/Burger';
import { createSvgIcon } from '@mui/material';

export const Header = () => {
  const theme = useTheme();
  const classes = useHeaderStyles(theme);
  const iconClasses = useIconStyles(theme);
  const buttonClasses = useButtonStyles(theme);
  const bagState = useSelector((state) => state.bag);
  const email = useSelector((state) => state.user.email);
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(removeUser());
    dispatch(clearBag());
    dispatch(clearCategory());
    dispatch(clearFavorites());
    dispatch(clearSearchResult());
    navigate('/register');
  };

  return (
    <header className={classes.root}>
      <nav className={classes.menuLeft}>
        <DrawerAppBar />
        <Button className={buttonClasses.burgerButton}>
          <Icon id="#burger" className={iconClasses.root} />
        </Button>
        <Link to="/" className={classes.menuLink}>
          NEW ARRIVALS
        </Link>
        <Link to="/" className={classes.menuLink}>
          SHOP
        </Link>
        <Link to="/" className={classes.menuLink}>
          COLLECTION
        </Link>
      </nav>
      <h2 className={classes.title}>MODNIKKY</h2>
      <nav className={classes.menuRight}>
        <button
          onClick={() => searchRef.current.open()}
          className={classes.headerBtn}>
          <Icon id="#search" className={iconClasses.root} />

          <span>SEARCH</span>
        </button>
        <button onClick={logOut} className={buttonClasses.headerBtn}>
          {email ? 'SING OUT' : 'SIGN IN'}
        </button>
        <Link to="/bag" className={classes.menuLink}>
          <Icon id="#shopping-cart" className={iconClasses.bagIcon} />{' '}
          <span>BAG({bagState.length})</span>
        </Link>
        <Link to="/favorites" className={classes.menuLink}>
          <Icon id="#wishlist" className={iconClasses.root} />
        </Link>
      </nav>
      <ModalMask ref={searchRef} />
    </header>
  );
};
