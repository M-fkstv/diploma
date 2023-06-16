import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../store';

import { Loader } from '../Loader';
import { ThemeProvider } from 'react-jss';
import { darkTheme } from '../../styles/darkTheme';
import { Sprite } from '../Sprite';
import { lightTheme } from '../../styles/lightTheme';

export const Layout = () => {
  const location = useLocation();

  const currentTheme = location.pathname === '/' ? lightTheme : darkTheme;
  return (
    <>
      <ScrollRestoration />
      <Sprite />

      <PersistGate loading={<Loader />} persistor={persistor}>
        <ThemeProvider theme={currentTheme}>
          <Outlet />
        </ThemeProvider>
      </PersistGate>
    </>
  );
};
