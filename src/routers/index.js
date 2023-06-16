import React, { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { LogInPage } from '../pages/LogInPage';
import { RegisterPage } from '../pages/RegisterPage';
import { Layout } from '../componets/Layout';
import { Loader } from '../componets/Loader';
import { ErrorBoundary } from '../componets/ErrorBoundaryRouter.js';
import { BagPage } from '../pages/BagPage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { App } from '../componets/App';
import { Wrapper } from '../componets/Wrapper';

const CardPage = lazy(() => import('../pages/CardPage'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route element={<Wrapper />}>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<App />} />
        <Route path="/bag" element={<BagPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        {/*<Route path="/wishlist" element={<Wishlist />} />*/}
        {/*<Route index element={<App />} />*/}

        <Route
          path="/item/:id"
          element={
            <Suspense fallback={<Loader />}>
              <CardPage />
            </Suspense>
          }
        />
      </Route>
    </Route>,
  ),
);
