import { Sprite } from './Sprite';
import { Loader } from './Loader';
import { persistor } from '../store';
import { ThemeProvider } from 'react-jss';
import { Outlet, useLocation } from 'react-router-dom';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { lightTheme } from '../styles/lightTheme';
import { darkTheme } from '../styles/darkTheme';
import { Header } from './Header';
import { Layout } from './Layout';
import { Footer } from './Footer';
import { SingUp } from './SingUp';

export const ThemeWrapper = () => {
  const location = useLocation();

  const currentTheme = location.pathname === '/' ? lightTheme : darkTheme;
  return (
    <>
      <Sprite />

      <PersistGate loading={<Loader />} persistor={persistor}>
        <ThemeProvider theme={currentTheme}>
          <SingUp />
          <Layout />
        </ThemeProvider>
      </PersistGate>
    </>
  );
};
