import React, { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Layout } from '../componets/Layout';
import { Loader } from '../componets/Loader';
import { ErrorBoundary } from '../componets/ErrorBoundaryRouter.js';
import { App } from '../componets/App';
import { Wrapper } from '../componets/Wrapper';
import { Bag } from '../componets/Bag';
import { Favorites } from '../componets/Favorites';
import { LogIn } from '../componets/LogIn';
import { SingUp } from '../componets/SingUp';

const FullItemCard = lazy(() =>
  import('../componets/FullItemCard/FullItemCard'),
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route element={<Wrapper />}>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SingUp />} />
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="/item/:id"
            element={
              <Suspense fallback={<Loader />}>
                <FullItemCard />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Route>,
  ),
);
