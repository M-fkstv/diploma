import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { rootReducer } from './slices';
import { salesApi } from '../services/getSales';
import { bagAPI } from '../services/bagAPI';
import { subscriptionAPI } from '../services/subscribeApi';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST'],
        // add hotels to blacklist
      },
    }).concat(
      salesApi.middleware,
      bagAPI.middleware,
      subscriptionAPI.middleware,
    ),
});

export const persistor = persistStore(store);
