import * as React from 'react';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../Icons/Icon';
import { useButtonStyles } from '../Button/Button.styles';
import { useIconStyles } from '../Icons/Icon/Icon.style';
import { useTheme } from 'react-jss';
import { useHeaderStyles } from '../Header/Header.styles';
import { ModalMask } from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button';
import { removeUser } from '../../store/slices/user.slice';
import { clearBag } from '../../store/slices/bag.slice';
import { clearCategory } from '../../store/slices/category.slice';
import { clearFavorites } from '../../store/slices/favorites.slice';
import { clearSearchResult } from '../../store/slices/search.slice';

const drawerWidth = 240;
// const navItems = [(<Link to="/" className={classes.asideLink}>NEW ARRIVALS</Link>),]
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const classes = useHeaderStyles(theme);
  const buttonClasses = useButtonStyles(theme);
  const iconClasses = useIconStyles();
  const searchRef = useRef(null);
  const bagState = useSelector((state) => state.bag);
  const email = useSelector((state) => state.user.email);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ my: 2 }}>
        MODNIKKY
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link to="/" className={classes.asideLink}>
              NEW ARRIVALS
            </Link>
          </ListItemButton>
        </ListItem>{' '}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link to="/" className={classes.asideLink}>
              SHOP
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link to="/" className={classes.asideLink}>
              COLLECTION
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <button
              onClick={() => searchRef.current.open()}
              className={buttonClasses.asideBtn}>
              <Icon id="#search" className={iconClasses.root} />
              <span>SEARCH</span>
            </button>
          </ListItemButton>
        </ListItem>{' '}
        <ListItem disablePadding>
          <ListItemButton color="#000000" sx={{ textAlign: 'center' }}>
            <Link to="/favorites" className={classes.asideLink}>
              {/*<IconButton aria-label="like" size="small">*/}
              <FavoriteBorderIcon fontSize="large" />
              {/*</IconButton>*/}
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton color="inherit" sx={{ textAlign: 'center' }}>
            <Link to="/bag" className={classes.asideLink}>
              {/*<BagIcon />/*/}
              <Icon id="#shopping-cart" className={iconClasses.bagIcon} />{' '}
              <span>({bagState.length})</span>
            </Link>
          </ListItemButton>
        </ListItem>{' '}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Button
              onClick={logOut}
              className={buttonClasses.asideBtn}
              title={email ? 'SING OUT' : 'SIGN IN'}></Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { lg: 'none' } }}>
        <Icon id="#burger" className={iconClasses.burgerIcon} />
      </IconButton>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
      <ModalMask ref={searchRef} />
    </>
  );
}

export default DrawerAppBar;
