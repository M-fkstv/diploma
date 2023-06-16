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
import { Link } from 'react-router-dom';
import { Icon } from '../Icons/Icon';
import { useButtonStyles } from '../Button/Button.styles';
import { useIconStyles } from '../Icons/Icon/Icon.style';
import { useTheme } from 'react-jss';
import { useHeaderStyles } from '../Header/Header.styles';
import { ModalMask } from '../Modal';
import { useSelector } from 'react-redux';

const drawerWidth = 240;
// const navItems = [(<Link to="/" className={classes.menuLink}>NEW ARRIVALS</Link>),]
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const classes = useHeaderStyles(theme);
  const buttonClasses = useButtonStyles();
  const iconClasses = useIconStyles();
  const searchRef = useRef(null);
  const bagState = useSelector((state) => state.bag);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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
            <Link to="/" className={classes.menuLink}>
              NEW ARRIVALS
            </Link>
          </ListItemButton>
        </ListItem>{' '}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link to="/" className={classes.menuLink}>
              SHOP
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link to="/" className={classes.menuLink}>
              COLLECTION
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <button
              onClick={() => searchRef.current.open()}
              className={buttonClasses.headerBtn}>
              <Icon id="#search" className={iconClasses.root} />
              <span>SEARCH</span>
            </button>
          </ListItemButton>
        </ListItem>{' '}
        <ListItem disablePadding>
          <ListItemButton color="#000000" sx={{ textAlign: 'center' }}>
            <Link to="/favorites" className={classes.menuLink}>
              {/*<IconButton aria-label="like" size="small">*/}
              <FavoriteBorderIcon fontSize="large" />
              {/*</IconButton>*/}
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton color="inherit" sx={{ textAlign: 'center' }}>
            <Link to="/bag" className={classes.menuLink}>
              {/*<BagIcon />/*/}
              <Icon id="#shopping-cart" className={iconClasses.bagIcon} />{' '}
              <span>({bagState.length})</span>
            </Link>
          </ListItemButton>
        </ListItem>{' '}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <button className={buttonClasses.headerBtn}>SING OUT</button>
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

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
