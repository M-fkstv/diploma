import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './user.slice';
import { salesApi } from '../../services/getSales';
import { bagAPI } from '../../services/bagAPI';
import { favoritesReducer } from './favorites.slice';
import { bagReducer } from './bag.slice';
import { categoryReducer } from './category.slice';
import { searchResultReducer } from './search.slice';
import { subscriptionAPI } from '../../services/subscribeApi';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    salesApi.reducerPath,
    bagAPI.reducerPath,
    subscriptionAPI.reducerPath,
  ],
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    favorites: favoritesReducer,
    user: userReducer,
    bag: bagReducer,
    category: categoryReducer,
    searchResult: searchResultReducer,
    [salesApi.reducerPath]: salesApi.reducer,
    [bagAPI.reducerPath]: bagAPI.reducer,
    [subscriptionAPI.reducerPath]: subscriptionAPI.reducer,
  }),
);
