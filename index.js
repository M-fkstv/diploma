import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { Loader } from './src/componets/Loader';
import { router } from './src/routers';

import './index.css';
import './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loader />} />
  </React.StrictMode>,
);
