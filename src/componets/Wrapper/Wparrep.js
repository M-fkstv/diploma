import React from 'react';

import { Sprite } from '../Sprite';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from '../../store';
import { Layout } from '../Layout';
import { Loader } from '../Loader';
import { ThemeProvider } from 'react-jss';
import { PersistGate } from 'redux-persist/integration/react';
import { lightTheme } from '../../styles/lightTheme';
import { darkTheme } from '../../styles/darkTheme';

export const Wrapper = () => {
  const location = useLocation();

  const currentTheme = location.pathname === '/' ? lightTheme : darkTheme;
  return (
    <>
      <ScrollRestoration />
      <Sprite />
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <ThemeProvider theme={currentTheme}>
            <Outlet />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
};
