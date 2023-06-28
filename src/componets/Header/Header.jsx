import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'react-jss';

import { Icon } from '../Icons/Icon';
import { ModalMask } from '../Modal';
import { Button } from '../Button';
import DrawerAppBar from '../Burger/Burger';

import { removeUser } from '../../store/slices/user.slice';
import { clearBag } from '../../store/slices/bag.slice';
import { clearCategory } from '../../store/slices/category.slice';
import { clearFavorites } from '../../store/slices/favorites.slice';
import { clearSearchResult } from '../../store/slices/search.slice';

import { useHeaderStyles } from './Header.styles';
import { useIconStyles } from '../Icons/Icon/Icon.style';
import { useButtonStyles } from '../Button/Button.styles';

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
        <Link to="/" className={classes.headerLink}>
          NEW ARRIVALS
        </Link>
        <Link to="/" className={classes.headerLink}>
          SHOP
        </Link>
        <Link to="/" className={classes.headerLink}>
          COLLECTION
        </Link>
      </nav>
      <h2 className={classes.title}>MODNIKKY</h2>
      <nav className={classes.menuRight}>
        <button
          onClick={() => searchRef.current.open()}
          className={buttonClasses.primaryBtn}
        >
          <Icon id="#search" className={iconClasses.root} />

          <span>SEARCH</span>
        </button>
        <Button
          onClick={logOut}
          className={buttonClasses.primaryBtn}
          title={email ? 'SING OUT' : 'SIGN IN'}
        ></Button>
        <Link to="/bag" className={classes.headerLink}>
          <Icon id="#shopping-cart" className={iconClasses.bagIcon} />{' '}
          <span>BAG({bagState.length})</span>
        </Link>
        <Link to="/favorites" className={classes.headerLink}>
          <Icon id="#wishlist" className={iconClasses.root} />
        </Link>
      </nav>
      <ModalMask ref={searchRef} />
    </header>
  );
};
